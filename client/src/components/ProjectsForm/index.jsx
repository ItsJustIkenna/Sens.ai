import React from "react";

const ProjectsForm = ({
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
}) => {
  return (
    <div
      className="block "
      style={{ height: "auto", width: "40%", float: "left" }}
    >
      <div className="field">
        <label className="label">Name</label>
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
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;
