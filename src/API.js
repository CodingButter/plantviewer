const URL_BASE = "https://chatstyler.tk/crud/";
export const addPlant = async (plant) => {
  console.log(plant);
  const response = await fetch(`${URL_BASE}create/plant`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(plant)
  });
  const status = await response.json();
  return status;
};
