import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getData();
  }, [setColorList]);

  const getData = () => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err, "Error in BubblePage component")
        throw(err)
      })
  };

  return (
    <>
      <ColorList 
        colors={colorList} 
        updateColors={setColorList} 
        getData={getData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;