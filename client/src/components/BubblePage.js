import React, { useState, useEffect } from "react";
import Api from "../utils/api";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import api from "../utils/api";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    api()
      .get("/api/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
