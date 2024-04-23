import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlace } from './placesSlice';

const PlacesAutocomplete = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 2) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      );
      const data = await response.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.display_name);
    setSuggestions([]);
    dispatch(addPlace({
      id: suggestion.place_id,
      name: suggestion.display_name,
      location: { lat: suggestion.lat, lng: suggestion.lon }
    }));
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for places..."
        className="w-96 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 mt-1 max-h-60 overflow-auto border border-gray-300 bg-white rounded-md shadow-lg">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelectSuggestion(suggestion)}
              className="p-4 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
