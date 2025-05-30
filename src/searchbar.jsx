import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
