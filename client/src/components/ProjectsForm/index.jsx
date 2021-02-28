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
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">Name</label>
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
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">Start Date</label>
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
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">End Date</label>
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
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">Url</label>
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
      
      
      {/* Input / Name */}


      <div className="field">
        <label className="label has-text-white">Description</label>
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
