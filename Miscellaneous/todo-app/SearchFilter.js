import React, { useState } from 'react';

const SearchFilter = () => {
  // Step 1: Declare React states for search input values
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Sample list of items
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Grapes',
    // Add more items as needed
  ];

  // Step 2: Create HTML input text for entering search term and update state in onChange function
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Step 3: Add Array.filter() on list of items with search term value
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
