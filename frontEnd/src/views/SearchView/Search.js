import React from "react";

import "./search-page.css";
import SearchResults from "./Sections/SearchResults/SearchResults";
import SearchFilters from "./Sections/SearchBanner/SearchFilters";

const Search = () => {
  return (
    <div>
      <SearchFilters />
      <SearchResults />
    </div>
  );
};

export default Search;
