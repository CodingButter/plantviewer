const URL_BASE = "https://chatstyler.tk/crud/";
export const getPlants = async () => {
  const response = await fetch(`${URL_BASE}read/plants`);
  const status = await response.json();
  return status;
};
export const updatePlant = async (id) => {
  const response = await fetch(`${URL_BASE}update/plant/${id}`);
  const status = await response.json();
  return status;
};
export const deletePlant = async (id) => {
  const response = await fetch(`${URL_BASE}delete/plant/${id}`);
  const status = await response.json();
  return status;
};
