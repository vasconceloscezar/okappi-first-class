import fakeStoreApi from "../api/fake-store-api";

export const loadProducts = async () => {
  const data = await fakeStoreApi
    .get("/products")
    .then((res) => res.data)
    .catch((err) => console.error("Loading Products failed with: ", err.message));

  return data;
};
