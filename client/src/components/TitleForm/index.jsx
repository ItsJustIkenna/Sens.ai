import React from "react";

const TitleForm = ({
  handleSubmit,
  title,
  setTitle,
  setShowModal,
  submitTitle,
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
        <label className="label has-text-white">Your Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={title}
            onChange={setTitle}
            style={{ backgroundColor: "transparent", color: "white" }}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            style={{
              backgroundColor: "transparent",
              border: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
            onClick={submitTitle}
          >
            Submit
          </button>
        </div>
        {/* <div className="control">
          <button className="button is-link is-light" onClick={setShowModal} >Cancel</button>
        </div> */}
      </div>
    </div>
  );
};

export default TitleForm;
