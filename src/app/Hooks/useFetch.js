import { useState, useEffect } from "react";

// Render-as-YOU-Fecht => Metodologia para el fetching de datos de una manera mas pro

export default function useFetch(url, filters, searchTerm) {
  const [data, setData] = useState(null);

  // Por si queremos saber cuando esta cargando la data y poner algún efecto
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null); // Estado que maneja el abortController

  let fetchUrl = url;

  // Agregar parámetros de filtro a la URL
  if (filters.length > 0) {
    const filterParams = filters.join(",");
    fetchUrl += `?filters=${filterParams}`;
  }

  // Agregar término de búsqueda a la URL
  if (searchTerm) {
    fetchUrl += `&search=${searchTerm}`;
  }

  // Funcion fetchData 
  const fetchData = () => {
    setLoading(true);
    if (controller) {
      fetch(fetchUrl, { signal: controller.signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request Cancelled");
          } else {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
    }
  };


  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    fetchData(); // Llamar a fetchData al inicio para realizar la solicitud

    return () => abortController.abort();
  }, [fetchUrl, controller]);


  // Por si es el usuario que cancela la petición
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request cancelled");
    }
  };

  // retorno loading para saber el estado de la carga
  return { loading, error, handleCancelRequest , fetchData};
}
