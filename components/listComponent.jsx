import React, { useState, useEffect } from 'react';

function ListComponent({ data, filterCriteria }) {
  const [filteredData, setFilteredData] = useState([]);

  // Filtrar datos cuando cambien los criterios de filtrado
  useEffect(() => {
    // Logica del filtrados
    const filtered = data.filter(item => {
      // Filtro
      if (typeof filterCriteria === 'string') {
        return item.nombre.toLowerCase().includes(filterCriteria.toString().toLowerCase());
      }
      else console.log(typeof(filterCriteria))
    });
    setFilteredData(filtered);
  }, [data, filterCriteria]);

  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index}>{item.nombre}</div>
      ))}
    </div>  
  );
}

export default ListComponent;
