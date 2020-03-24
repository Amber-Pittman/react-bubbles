import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { useHistory } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth as axios } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [setError] = useState()
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  //const history = useHistory();

  useEffect(() => {
    axios()
      .get("/colors")
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err, "Error in BubblePage component")
        //throw(err)
        setError(err.res.data.message)        
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;