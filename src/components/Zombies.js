import { useState } from "react";

const useZombies = () => {
  const [zombies, setZombies] = useState(20);
  const addZombies = () => setZombies(zombies + 1);
  const removeZombies = () => setZombies(zombies > 0 ? zombies - 1 : 0);
  return { zombies, addZombies, removeZombies };
};
export default useZombies;
