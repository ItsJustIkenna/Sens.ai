import React from "react";

const BioForm = ({
  handleSubmit,
  projectBio,
  setProjectBio,
  setShowModal,
  submitBio
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
            value={projectBio}
            onChange={setProjectBio}
          />
        </div>
      </div>
      
     

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={submitBio}>
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
