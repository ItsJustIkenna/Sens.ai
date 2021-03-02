import React from "react";

const BioForm = ({
  fontSize,
  none,
  option1,
  option2,
  option3,
  option4,
  option5,
  handleSubmit,
  projectTitle,
  setProjectTitle,
  setShowModal
}) => {
  return (
    
    <div
      className="column "
      style={{ height: "auto", justifyContent: "center", alignContent: "center" , }}
    >
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">Bio</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
      </div>
      
     

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={setShowModal} >Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BioForm;
