
import React from "react";
import Button from '../Button/index'

const CRUDMenu = () => {
  return (
    <div className="column" >
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} float = "left" title = "Edit"/>
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} float = "left"title = "Delete Account"/>
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} float = "left" title = "Ikigai"/>
      </div>
  );
};

export default CRUDMenu;
