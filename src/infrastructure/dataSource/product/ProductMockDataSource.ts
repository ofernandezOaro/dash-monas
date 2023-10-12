export const createProduct = async () => {
  const formdata = new FormData();
  formdata.append("number", "000203");
  formdata.append("traje", "traje");
  formdata.append("ojos", "ojos");
  formdata.append("sombrero", "sombrero");
  formdata.append("boca", "boca");
  formdata.append("accesorios", "accesorios");
  formdata.append("pelaje", "pelaje");
  formdata.append("fondo", "fondo");

  const requestOptions: RequestInit = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://fancymonas-back.test.back.oaro.net/api/artworks/add-artwork",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const asigneProduct = async () => {
  var raw = "";
  var requestOptions: RequestInit = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://fancymonas-back.test.back.oaro.net/api/artworks/assign-artwork",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const asigneContentProduct = async () => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://fancymonas-back.test.back.oaro.net/api/artworks/add-artwork/content",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
