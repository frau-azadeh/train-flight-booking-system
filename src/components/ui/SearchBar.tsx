import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="جستجو..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;
