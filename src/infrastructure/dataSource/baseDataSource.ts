export const baseFetch = async (url: string, method: string = "GET", data: any = null) => {

  const requestOptions: RequestInit = {
    method,
    headers: {
      // Authorization: `Bearer ${token}`,
      "X-API-Key": "dd596ccb977ec91a200e3485584a1c1e2d0fe2e921e39aa46920a45be9d60379"
    }
  };

  if (method === "POST" && data) {
    // En caso de que los datos sean FormData, no agregue el encabezado de contenido
    if (data instanceof FormData) {
      requestOptions.body = data;
    } else {
      // Si los datos no son FormData, conviértelos a JSON
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(data);
    }
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}${url}`, requestOptions);
    if (res.ok) {
      const responseData = await res.json();
      return { isLoading: false, isSuccess: true, isError: false, result: responseData, res: res };
    } else {
      return { isLoading: false, isSuccess: false, isError: true, result: null, res: res };
    }
  } catch (error) {
    return { isLoading: false, isSuccess: false, isError: true, result: null, res: null };
  }
};
