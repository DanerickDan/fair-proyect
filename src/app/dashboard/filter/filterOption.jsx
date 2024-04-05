function FilterOption({ label, options, selectedFilters, onFilterChange }) {
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    const updatedFilters = checked
      ? [...selectedFilters, value] // Agregar filtro seleccionado
      : selectedFilters.filter((filter) => filter !== value); // Quitar filtro no seleccionado

    onFilterChange(updatedFilters); // Llamar a la función de devolución de llamada con los filtros seleccionados
  };

  if (!options || !Array.isArray(options)) {
    return <div>No hay opciones disponibles</div>;
  }

  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedFilters.includes(option)}
              onChange={handleFilterChange}
            />
            {option}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterOption;

// Componente innecesario