import { useState } from "react";

const useCurrency = () => {
  const [money, setMoney] = useState(100);
  const earnMoney = () => setMoney(money + 5);
  const spendMoneyOnAmmo = () => setMoney(money - 25);
  return { money, earnMoney, spendMoneyOnAmmo };
};
export default useCurrency;
