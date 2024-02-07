import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ColorSelect = ({ id, color }) => {
  const colors = {
    black: "black",
    green: "green",
  };
  const [prodColor, setProductColor] = useState(false);
  const changeColor = ()=>{
    setProductColor(!prodColor)
  }
  return (
    <>
      <div className="color-container">
        <div className="color-circle">
          <div
            className="color-inner"
            style={
              id === 17
                ? { "background-color": color[0].color }
                : { "background-color": color[1].color }
            }
          ></div>
        </div>
        <div className="select-color" onClick={changeColor}><span>{id === 17 ? color[0].label : color[1].label}</span> <KeyboardArrowRightIcon /></div>
      </div>
      {prodColor && <div className="color-list">
        <ul>
            <li>red</li>
            <li>white</li>
            <li>blue</li>
            <li>black</li>
        </ul>
      </div>}
    </>
  );
};
export default ColorSelect;
