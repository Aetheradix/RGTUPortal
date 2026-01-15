import sidebarMenu from "@/config/sidebar";

export type SearchResult = {
  title: string;
  route: string;
  breadcrumb: string;
  type: "module" | "submodule" | "page";
};

const searchMenu = (query: string): SearchResult[] => {
  if (!query || query.trim().length < 2) return [];

  const results: SearchResult[] = [];
  const searchTerm = query.toLowerCase().trim();

  // Search home
  if (sidebarMenu.home.module.toLowerCase().includes(searchTerm)) {
    results.push({
      title: sidebarMenu.home.module,
      route: sidebarMenu.home.route,
      breadcrumb: "Home",
      type: "module",
    });
  }

  // Search through all modules, submodules, and pages
  sidebarMenu.sidebar.forEach((module) => {
    // Search module
    if (module.module.toLowerCase().includes(searchTerm)) {
      results.push({
        title: module.module,
        route: module.route,
        breadcrumb: module.module,
        type: "module",
      });
    }

    // Search submodules and pages
    module.subModules?.forEach((subModule) => {
      // Search submodule
      if ((subModule.subModule || "").toLowerCase().includes(searchTerm)) {
        results.push({
          title: subModule.subModule || "",
          route: subModule.route,
          breadcrumb: `${module.module} > ${subModule.subModule}`,
          type: "submodule",
        });
      }

      // Search pages
      subModule.pages?.forEach((page) => {
        if ((page.page || "").toLowerCase().includes(searchTerm)) {
          results.push({
            title: page.page || "",
            route: page.route,
            breadcrumb: `${module.module} > ${subModule.subModule} > ${page.page}`,
            type: "page",
          });
        }
      });
    });
  });

  return results.slice(0, 10); // Limit to 10 results
};

export { searchMenu };
