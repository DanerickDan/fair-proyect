import { useState, useEffect } from "react";

export default function useFetch(url, filters, searchTerm) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let fetchUrl = url;

        // Agregar parámetros de filtro a la URL
        if (filters && filters.length > 0) {
          const filterParams = filters.join(",");
          fetchUrl += `?filters=${filterParams}`;
        }

        // Agregar término de búsqueda a la URL
        if (searchTerm) {
          fetchUrl += `&search=${searchTerm}`;
        }

        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
    };
  }, [url, filters, searchTerm]);

  return { data, loading, error };
}



/*
// Render-as-YOU-Fecht => Metodologia para el fetching de datos de una manera mas pro

export default function useFetch(url, filters, searchTerm) {
  const [data, setData] = useState(null);

  // Por si queremos saber cuando esta cargando la data y poner algún efecto
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(new AbortController()); // Estado que maneja el abortController

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
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(fetchUrl, { signal: controller.signal });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(response)
      setData(responseData);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      }
      console.log("hay bobo")
    } finally {
      setLoading(false);
    }
  }, [fetchUrl, controller]);


  useEffect(() => {

    // const abortController = new AbortController();
    // setController(abortController);

    fetchData(); // Llamar a fetchData al inicio para realizar la solicitud
    return () => {
      controller.abort();
    };

  }, [fetchUrl, controller,fetchData]);


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
*/