import React, { useState, useEffect } from "react";

import { RESTRO_MENU } from "../config/config";

export const useMenu = (id) => {
  const [restroMenu, setRestroMenu] = useState({});
  useEffect(() => {
    getRestroMenu();
  }, []);

  //   API CALL
  const getRestroMenu = async () => {
    const data = await fetch(RESTRO_MENU + id);
    const Json = await data.json();
    setRestroMenu(Json);
  };

  return restroMenu;
};

export const useRestoFilter = () => {};
