import { useState } from 'react';
import FilterOption from '../app/filterOption';
import { provinciasData, posteoTrabajoData, trabajosRealizadosData } from '@/app/dataFilter';


function FilterComponent({ onFilterChange }) {
  const [selectedLocacion, setSelectedLocacion] = useState([]);
  const [selectedPosteo, setSelectedPosteo] = useState([]);
  const [selectedTrabajos, setSelectedTrabajos] = useState([]);

  const handleLocacionChange = (selectedFilters) => {
    setSelectedLocacion(selectedFilters);
    onFilterChange(selectedFilters);
  };

  const handlePosteoChange = (selectedFilters) => {
    setSelectedPosteo(selectedFilters);
    onFilterChange(selectedFilters);
  };

  const handleTrabajosChange = (selectedFilters) => {
    setSelectedTrabajos(selectedFilters);
    onFilterChange(selectedFilters);
  };

  return (
    <div>
      
      <FilterOption
        label="Filtrar por Locación"
        options={provinciasData.map(provincia => provincia.nombre)}
        selectedFilters={selectedLocacion} // Pasa los filtros seleccionados
        onFilterChange={handleLocacionChange} // Maneja cambios en los filtros seleccionados
      />

      <FilterOption
        label="Filtrar tiempo trabajo posteado"
        options={posteoTrabajoData.map(posteoTrabajo => posteoTrabajo)}
        selectedFilters={selectedPosteo}
        onFilterChange={handlePosteoChange}
      />
      <FilterOption
        label="Filtrar por trabajos realizados"
        options={trabajosRealizadosData.map(trabajos => trabajos)}
        selectedFilters={selectedTrabajos}
        onFilterChange={handleTrabajosChange}
      />
    </div>
  );
}

export default FilterComponent;



/* <fieldset>
  <legend>Buscar</legend>
  <input
    type="text"
    placeholder="Buscar"
    value={filterValue}
    onChange={handleSelectedFiltersChange}
  />
</fieldset> */