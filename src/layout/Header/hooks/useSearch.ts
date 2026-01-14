import sidebarMenu from "@/config/sidebar";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export type SearchResult = {
  title: string;
  route: string;
  type: "module" | "submodule" | "page";
  breadcrumb: string;
  children?: SearchResult[];
  isExpanded?: boolean;
};

const createSearchableMenu = () => {
  const searchableItems: Array<{
    title: string;
    route: string;
    type: "module" | "submodule" | "page";
    breadcrumb: string;
    moduleTitle?: string;
    subModuleTitle?: string;
    pages?: Array<{ title: string; route: string }>;
  }> = [];

  // Home
  searchableItems.push({
    title: sidebarMenu.home.module.toLowerCase(),
    route: sidebarMenu.home.route,
    type: "module",
    breadcrumb: "Home",
  });

  // All modules
  sidebarMenu.sidebar.forEach((module) => {
    const moduleTitle = module.module.toLowerCase();

    searchableItems.push({
      title: moduleTitle,
      route: module.route,
      type: "module",
      breadcrumb: module.module,
      moduleTitle: module.module,
    });

    module.subModules?.forEach((subModule) => {
      const subModuleTitle = subModule.subModule.toLowerCase();

      searchableItems.push({
        title: subModuleTitle,
        route: subModule.route,
        type: "submodule",
        breadcrumb: `${module.module} > ${subModule.subModule}`,
        moduleTitle: module.module,
        subModuleTitle: subModule.subModule,
        pages: subModule.pages.map((p) => ({
          title: p.page,
          route: p.route,
        })),
      });

      subModule.pages.forEach((page) => {
        searchableItems.push({
          title: page.page.toLowerCase(),
          route: page.route,
          type: "page",
          breadcrumb: `${module.module} > ${subModule.subModule} > ${page.page}`,
          moduleTitle: module.module,
          subModuleTitle: subModule.subModule,
        });
      });
    });
  });

  return searchableItems;
};

const SEARCHABLE_MENU = createSearchableMenu();

export const useSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [expandedSubmodules, setExpandedSubmodules] = useState<Set<string>>(
    new Set()
  );

  const searchRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchQuery]);

  const searchMenu = useMemo(() => {
    if (!debouncedQuery || debouncedQuery.trim().length < 2) {
      return [];
    }

    const searchTerm = debouncedQuery.toLowerCase().trim();
    const moduleMap = new Map<string, SearchResult>();

    for (const item of SEARCHABLE_MENU) {
      if (item.title.includes(searchTerm)) {
       
        if (item.type === "module") {
          const module = sidebarMenu.sidebar.find(
            (m) => m.module === item.moduleTitle
          );
          if (module && module.subModules) {
            const submoduleResults: SearchResult[] = module.subModules.map(
              (sub) => ({
                title: sub.subModule,
                route: sub.route,
                breadcrumb: `${module.module} > ${sub.subModule}`,
                type: "submodule" as const,
                children: sub.pages.map((page) => ({
                  title: page.page,
                  route: page.route,
                  breadcrumb: `${module.module} > ${sub.subModule} > ${page.page}`,
                  type: "page" as const,
                })),
                isExpanded: false, 
              })
            );

            moduleMap.set(item.route, {
              title: item.moduleTitle || item.title,
              route: item.route,
              breadcrumb: item.breadcrumb,
              type: "module",
              children: submoduleResults,
              isExpanded: true,
            });
          }
        }

       
        else if (item.type === "submodule") {
          // Check if parent module already exists
          const existingModule = Array.from(moduleMap.values()).find(
            (m) =>
              m.type === "module" &&
              m.title.toLowerCase() === item.moduleTitle?.toLowerCase()
          );

          if (existingModule) {
           
            const subExists = existingModule.children?.some(
              (s) => s.route === item.route
            );
            if (!subExists && existingModule.children) {
              existingModule.children.push({
                title: item.subModuleTitle || item.title,
                route: item.route,
                breadcrumb: item.breadcrumb,
                type: "submodule",
                children: item.pages?.map((page) => ({
                  title: page.title,
                  route: page.route,
                  breadcrumb: `${item.moduleTitle} > ${item.subModuleTitle} > ${page.title}`,
                  type: "page" as const,
                })),
                isExpanded: false,
              });
            }
          } else {
            
            const module = sidebarMenu.sidebar.find(
              (m) => m.module === item.moduleTitle
            );
            if (module) {
              moduleMap.set(module.route, {
                title: module.module,
                route: module.route,
                breadcrumb: module.module,
                type: "module",
                children: [
                  {
                    title: item.subModuleTitle || item.title,
                    route: item.route,
                    breadcrumb: item.breadcrumb,
                    type: "submodule",
                    children: item.pages?.map((page) => ({
                      title: page.title,
                      route: page.route,
                      breadcrumb: `${item.moduleTitle} > ${item.subModuleTitle} > ${page.title}`,
                      type: "page" as const,
                    })),
                    isExpanded: false,
                  },
                ],
                isExpanded: true,
              });
            }
          }
        }

       
        else {
          const existingModule = Array.from(moduleMap.values()).find(
            (m) =>
              m.type === "module" &&
              m.title.toLowerCase() === item.moduleTitle?.toLowerCase()
          );

          if (existingModule) {
            
            let targetSubmodule = existingModule.children?.find(
              (s) =>
                s.title.toLowerCase() === item.subModuleTitle?.toLowerCase()
            );

            if (!targetSubmodule) {
             
              const subModule = sidebarMenu.sidebar
                .find((m) => m.module === item.moduleTitle)
                ?.subModules?.find((s) => s.subModule === item.subModuleTitle);

              if (subModule && existingModule.children) {
                targetSubmodule = {
                  title: subModule.subModule,
                  route: subModule.route,
                  breadcrumb: `${item.moduleTitle} > ${subModule.subModule}`,
                  type: "submodule",
                  children: [
                    {
                      title: item.title,
                      route: item.route,
                      breadcrumb: item.breadcrumb,
                      type: "page",
                    },
                  ],
                  isExpanded: false,
                };
                existingModule.children.push(targetSubmodule);
              }
            } else {
      
              if (targetSubmodule.children) {
                const pageExists = targetSubmodule.children.some(
                  (p) => p.route === item.route
                );
                if (!pageExists) {
                  targetSubmodule.children.push({
                    title: item.title,
                    route: item.route,
                    breadcrumb: item.breadcrumb,
                    type: "page",
                  });
                }
              }
            }
          } else {
       
            const module = sidebarMenu.sidebar.find(
              (m) => m.module === item.moduleTitle
            );
            const subModule = module?.subModules?.find(
              (s) => s.subModule === item.subModuleTitle
            );

            if (module && subModule) {
              moduleMap.set(module.route, {
                title: module.module,
                route: module.route,
                breadcrumb: module.module,
                type: "module",
                children: [
                  {
                    title: subModule.subModule,
                    route: subModule.route,
                    breadcrumb: `${module.module} > ${subModule.subModule}`,
                    type: "submodule",
                    children: [
                      {
                        title: item.title,
                        route: item.route,
                        breadcrumb: item.breadcrumb,
                        type: "page",
                      },
                    ],
                    isExpanded: false,
                  },
                ],
                isExpanded: true,
              });
            }
          }
        }

        if (moduleMap.size >= 10) break; // Limit modules
      }
    }

    return Array.from(moduleMap.values());
  }, [debouncedQuery]);

  useEffect(() => {
    setSearchResults(searchMenu);
    setShowSearchResults(
      searchMenu.length > 0 && debouncedQuery.trim().length >= 2
    );
    setSelectedIndex(-1);
    // Clear expanded submodules on new search
    setExpandedSubmodules(new Set());
  }, [searchMenu, debouncedQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setDebouncedQuery("");
    setSearchResults([]);
    setShowSearchResults(false);
    setSelectedIndex(-1);
    setExpandedSubmodules(new Set());
  }, []);

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route);
      clearSearch();
    },
    [navigate, clearSearch]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showSearchResults || searchResults.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, searchResults.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        const selected = searchResults[selectedIndex];
        if (selected.type === "page") {
          handleNavigate(selected.route);
        }
      } else if (e.key === "Escape") {
        clearSearch();
      }
    },
    [
      showSearchResults,
      searchResults,
      selectedIndex,
      handleNavigate,
      clearSearch,
    ]
  );


  const toggleSubmodule = useCallback((submoduleRoute: string) => {
    setExpandedSubmodules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(submoduleRoute)) {
        newSet.delete(submoduleRoute);
      } else {
        newSet.add(submoduleRoute);
      }
      return newSet;
    });
  }, []);

  const getTypeColor = useCallback((type: string) => {
    switch (type) {
      case "module":
        return "bg-blue-100 text-blue-700";
      case "submodule":
        return "bg-purple-100 text-purple-700";
      case "page":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    searchResults,
    showSearchResults,
    setShowSearchResults,
    selectedIndex,
    expandedSubmodules,
    searchRef,
    clearSearch,
    handleNavigate,
    handleKeyDown,
    toggleSubmodule,
    getTypeColor,
  };
};
