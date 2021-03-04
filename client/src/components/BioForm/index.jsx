import React from "react";

const BioForm = ({
  handleSubmit,
  projectBio,
  setProjectBio,
  setShowModal,
  submitBio,
}) => {
  return (
    <div
      className="column "
      style={{
        height: "auto",
        justifyContent: "center",
        alignContent: "center",
      }}
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
            style={{ backgroundColor: "transparent", color: "white" }}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={submitBio}
            style={{
              backgroundColor: "transparent",
              border: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioForm;
