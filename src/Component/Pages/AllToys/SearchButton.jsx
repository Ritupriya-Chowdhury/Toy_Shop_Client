import  { useState } from 'react';

const SearchButton = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='text-center'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 ml-2 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
