import React from "react";
import BioForm from "../BioForm/index";
import "./index.css";

const Modal = ({
  showModal,
  setShowModal,
  modalTitle,
  projectBio,
  setProjectBio,
  submitBio
}) => {
  const active = showModal ? "modal is-active" : "modal";
  return showModal ? (
    <div className={active}>
      <div className="modal-background" onClick={setShowModal}></div>
      <div className="modal-card">
        <section className="sensai-modal">
          <h1
            className="title"
            style={{ textAlign: "center", color: "orange" }}
          >
            {modalTitle}
          </h1>
          <BioForm  projectBio={projectBio} setProjectBio={setProjectBio} submitBio={submitBio} />
        </section>
      </div>
    </div>
  ) : null;
};

export default Modal;
