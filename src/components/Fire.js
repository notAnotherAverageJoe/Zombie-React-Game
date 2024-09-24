import React, { useState } from "react";

const UseCannons = () => {
  const [cannon, fireCannon] = useState(0);
  const [ammo, setAmmo] = useState(10);

  const increment = () => fireCannon((cannon) => cannon + 1);
  const decrement = () => setAmmo((ammo) => (ammo > 0 ? ammo - 1 : 0));
  const reloadCAmmo = () => setAmmo((ammo) => ammo + 20);
  return { cannon, ammo, increment, decrement, reloadCAmmo };
};

export default UseCannons;
