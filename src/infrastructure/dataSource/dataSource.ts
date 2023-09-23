export const createProduct = async (data: any) => {
  /* api */
  try {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "file") {
        formdata.append(key, value as string);
      }
    });

    formdata.append("file", data.file[0]);

    const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}api/artworks/add-artwork`, {
      method: "POST",
      body: formdata,
    })

    if (res.ok) {
      const responseData = await res.json();
      return { isLoading: false, isSuccess: true, isError: false, result: responseData };
    } else {
      return { isLoading: false, isSuccess: false, isError: true, result: null };
    }
  } catch (error) {
    return { isLoading: false, isSuccess: false, isError: true, result: null };
  }
};
