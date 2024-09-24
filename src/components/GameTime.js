import useCannons from "./Fire";
import useZombies from "./Zombies";
import useCurrency from "./Money";
const GameTime = () => {
  const { cannon, ammo, increment, decrement, reloadCAmmo } = useCannons();
  const { zombies, addZombies, removeZombies } = useZombies();
  const { money, earnMoney, spendMoneyOnAmmo } = useCurrency();

  const fireAndUseAmmo = () => {
    increment(); // Fire the cannon
    decrement(); // Decrease the ammo
    removeZombies(); // Decrease Zombie numbers per shot
    earnMoney(); // Gain 5 bucks per shot for killing zombies
  };
  const reloadCannonAmmo = () => {
    reloadCAmmo();
    spendMoneyOnAmmo();
  };

  return (
    <div>
      <h1>Cannons Fired: {cannon}</h1>
      <h2>Ammo Remaining: {ammo}</h2>
      <h2>Current Zombies: {zombies}</h2>
      <h3>Currency: {money}</h3>
      <button onClick={fireAndUseAmmo}>Fire Cannon</button>
      <button onClick={reloadCannonAmmo}>Purchase Cannon Ammo</button>
    </div>
  );
};

export default GameTime;
