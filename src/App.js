import { useState, useEffect } from "react";
import AddPlant from "./AddPlant";
import ViewPlants from "./ViewPlants";
import { getPlants } from "./API";
export default function App() {
  const [plants, setPlants] = useState([]);
  const handleGetPlants = async () => {
    setPlants(await getPlants());
  };

  useEffect(() => {
    handleGetPlants();
  }, []);

  return (
    <>
      <AddPlant handleGetPlants={handleGetPlants} />
      <ViewPlants plants={plants} handleGetPlants={handleGetPlants} />
    </>
  );
}
