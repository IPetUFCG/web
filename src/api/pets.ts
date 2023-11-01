import api from "./instance";

export const getPets = async () => {
  const response = await api
    .get(`/pets`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
  return response;
};
