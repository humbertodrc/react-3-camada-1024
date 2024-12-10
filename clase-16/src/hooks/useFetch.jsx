import {useEffect, useState} from "react";

export function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Error en la petición");
			}
			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error.message);
		} finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, loading, error};
}
