import React from "react";

import "./search-page.css";
import SearchResults from "./Sections/SearchResults/SearchResults";
import SearchFilters from "./Sections/SearchBanner/SearchFilters";

const Search = () => {
  return (
    <div className="search-container">
      <SearchFilters className="search-filter-container" />
      <SearchResults className="search-results-container" />
    </div>
  );
};

export default Search;
