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


  useEffect(() => {
    // Para cuando se desmonte el componente libere todos los recursos
    const abortController = new AbortController(); // Función de limpieza
    setController(abortController);
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          // Si el error es AbortError es porque fue el usuario que cancelo la petición
          console.log("Request Cancelled");
        }
        setError(error);
      })
      .finally(() => setLoading(false));
    return () => abortController.abort();
  }, [url, filters, searchTerm]);

  // Por si es el usuario que cancela la petición
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request cancelled");
    }
  };

  // retorno loading para saber el estado de la carga
  return { data, loading, error, handleCancelRequest , fetchData};
}
