import { ChevronDown, Search, X } from "lucide-react";
import React from "react";
import { useSearch } from "./hooks/useSearch";

type SearchResult = {
  title: string;
  route: string;
  type: "module" | "submodule" | "page";
  breadcrumb: string;
  children?: SearchResult[];
  isExpanded?: boolean;
};

const SearchBar: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    searchResults,
    showSearchResults,
    setShowSearchResults,
    expandedSubmodules,
    searchRef,
    clearSearch,
    handleNavigate,
    handleKeyDown,
    toggleSubmodule,
    getTypeColor,
  } = useSearch();

  const renderSubmodule = (submodule: SearchResult) => {
    const isExpanded = expandedSubmodules.has(submodule.route);

    return (
      <div key={submodule.route}>
        <button
          onClick={() => toggleSubmodule(submodule.route)}
          className="w-full px-4 py-2.5 pl-8 text-left hover:bg-gray-50 transition-colors flex items-center gap-2 border-b border-gray-100"
        >
          <span className="text-sm text-gray-800 flex-1">
            {submodule.title}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
              submodule.type
            )} shrink-0`}
          >
            {submodule.type}
          </span>

          {submodule.children && submodule.children.length > 0 && (
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isExpanded ? "rotate-180" : ""
                }`}
            />
          )}
        </button>

        {submodule.children && submodule.children.length > 0 && isExpanded && (
          <div className="bg-gray-50">
            {submodule.children.map((page: SearchResult) => (
              <button
                key={page.route}
                onClick={() => handleNavigate(page.route)}
                className="w-full px-4 py-2 pl-16 text-left hover:bg-gray-100 transition-colors border-b border-gray-100 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 flex-1">
                    {page.title}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                      page.type
                    )} shrink-0`}
                  >
                    {page.type}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  {page.breadcrumb}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderSearchResult = (item: SearchResult) => {
    if (item.type === "module") {
      return (
        <div key={item.route} className="border-b border-gray-200">
          <div className="px-4 py-2.5 bg-gray-50 flex items-center gap-2 border-b border-gray-200">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="font-medium text-gray-900 text-sm">
              {item.title}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                item.type
              )} shrink-0 ml-auto`}
            >
              {item.type}
            </span>
          </div>

          {/* Submodules List */}
          {item.children && item.children.length > 0 && (
            <div className="bg-white">
              {item.children.map((submodule: SearchResult) =>
                renderSubmodule(submodule)
              )}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-2xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() =>
          debouncedQuery.trim().length >= 2 && setShowSearchResults(true)
        }
        placeholder="Search modules, submodules, pages..."
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}

      {/* Search Results Dropdown */}
      {showSearchResults && searchResults.length > 0 && (
        <div className=" absolute top-full mt-2
    left-1/2 -translate-x-1/2
    w-[95vw]
    sm:w-full sm:left-0 sm:translate-x-0
    bg-white
    border border-gray-200
    rounded-lg
    shadow-lg
    max-h-96
    overflow-y-auto
    z-50">
          {searchResults.map((item: SearchResult) => renderSearchResult(item))}
        </div>
      )}

      {/* No Results */}
      {showSearchResults &&
        debouncedQuery.trim().length >= 2 &&
        searchResults.length === 0 && (
          <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
            <p className="text-gray-500 text-center text-sm">
              No results found for "{debouncedQuery}"
            </p>
          </div>
        )}
    </div>
  );
};

export default SearchBar;
