import { useState } from "react";

function FilterComponent({ filters, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    const index = selectedFilters.indexOf(filter);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(index, 1);
      setSelectedFilters(updatedFilters);
    }
  };

  return (
    <div>
      {filters.map((filterGroup, index) => (
        <fieldset key={index}>
          <legend>{filterGroup.label}</legend>
          {filterGroup.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedFilters.includes(option)}
                  onChange={() => handleFilterChange(option)}
                />
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      ))}
    </div>
  );
}

export default FilterComponent;
