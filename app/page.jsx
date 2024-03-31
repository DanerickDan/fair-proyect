"use client"
import { useState } from 'react';
import FilterComponent from '../components/filterComponent';
import ListComponent from '../components/listComponent';
import { provinciasData } from "./dataFilter.js"


function App() {
  const [filterCriteria, setFilterCriteria] = useState('');

  const handleFilterChange = (value) => {
    setFilterCriteria(value);
  };

  return (
    <div>
      <FilterComponent onFilterChange={handleFilterChange} />
      <ListComponent data={provinciasData} filterCriteria={filterCriteria} />
    </div>
  );
}

export default App;
