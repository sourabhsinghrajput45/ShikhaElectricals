import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white px-4 py-2 rounded-full shadow-md transition-all duration-300 focus-within:ring-2 ring-blue-500"
    >
      <input
        type="text"
        placeholder="Search across the site..."
        className="bg-transparent focus:outline-none w-64 text-sm text-gray-800 placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <Search className="w-4 h-4 text-gray-600 ml-2" />
      </button>
    </form>
  );
};

export default SearchBar;
