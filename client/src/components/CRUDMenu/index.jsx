import React from "react";
import Button from "../Button/index";

const CRUDMenu = ({toggleEdit}) => {
  return (
    <div style={{display: "flex"}}>
      <Button
        className="button is-black is-rounded"
        style={{ fontSize: "60px", borderRadius: "250px" }}
        float="left"
        title="Edit"
        fontSize1="30px"
        margin="20px 20px 20px 50%"
        padding="30px 80px 35px 80px"
        onClick={toggleEdit}
      />
      <Button
        className="button is-black is-rounded"
        style={{ fontSize: "60px", borderRadius: "250px" }}
        float="left"
        title="Delete Account"
        fontSize1="30px"
        margin="20px 20% 20px 50%"
        padding="30px 80px 35px 80px"
      />
      <Button
        className="button is-black is-rounded"
        style={{ fontSize: "60px", borderRadius: "250px" }}
        float="left"
        title="Ikigai"
        fontSize1="30px"
        margin="20px 20px 20px 100%"
        padding="30px 80px 35px 80px"
      />
    </div>
  );
};

export default CRUDMenu;
