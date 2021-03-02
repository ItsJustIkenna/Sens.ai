import React from "react";

const UserProjects = ({
  Description,
  fontSize,
  none,
  option,
  defaultState,
  id,
  onClickProjects
}) => {

  return (
    <div
      className="block "
      style={{ height: "auto", width: "40%", float: "left" }}
    >
      <h1 className="title is-4 has-text-white" style={{ textAlign: "left" , float: "left" }}>
        Projects
      </h1>
      <button className="add-btn" onClick={onClickProjects} style={{margin: "-9px 0px 0px 15px"}} >+</button>
      { 
      option.map((projectName, index) => {
        index = id;
          return <li className="column is-12 has-text-white" style={{color: "white" , display : "block" , float: "left"}} key={index}>{projectName.name}<button className="add-btn" onClick={onClickProjects} style={{margin: "-9px 15px 0px 0px", float: "left"}} >-</button></li>
      })}
    </div>
  );
};

export default UserProjects;

//  {/* <select style={{width : "100%" , height : "40px" , backgroundColor : "transparent" , borderBlockColor : "white" , marginBottom : "15px" }} >
//       <option selected value={none}></option>
//       <option value={option1} style={{color : "white"}} >{option1}</option>
//       <option value={option2}>{option2}</option>
//       <option value={option3}>{option3}</option>
//       <option value={option4}>{option4}</option>
//       <option value={option5}>{option5}</option>
//     </select> */}
