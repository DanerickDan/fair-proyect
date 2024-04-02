// Este componente renderiza la lista de provincias filtradas osea que no lo necesito
// O mas bien debo cambiar la logica para que renderize los trabajos que cumplan con los
// FIltros

import { useState, useEffect } from "react";
import { useFetch } from "@/Hooks/useFetch";

function ListComponent({ data, filterCriteria }) {
  const [filteredData, setFilteredData] = useState([]);
  const { dataTrabajos, loading , error} = useFetch(
    "http://localhost:3000/api/trabajos"
  );

  // Filtrar datos cuando cambien los criterios de filtrado
  useEffect(() => {
    // Logica del filtrados
    const filtered = data.filter((item) => {
      // Filtro
      if (typeof filterCriteria === "string") {
        return item.nombre
          .toLowerCase()
          .includes(filterCriteria.toString().toLowerCase());
      } else console.log(typeof filterCriteria);
    });
    setFilteredData(filtered);
  }, [data, filterCriteria]);

  return (
    <div>
      {dataTrabajos?.map((idLocation) => {
        <div key={idLocation}>

        </div>;
      })}
    </div>
  );
}

export default ListComponent;
