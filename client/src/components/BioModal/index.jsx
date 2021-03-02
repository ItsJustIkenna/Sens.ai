import React from "react";
import BioForm from "../BioForm/index";
import "./index.css";

const Modal = ({
  showModal,
  setShowModal,
  handleSubmit,
  projectTitle,
  setProjectTitle,
  modalTitle,
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
          {/* <button
            className="delete"
            onClick={setShowModal}
            aria-label="close"
          ></button> */}
          <BioForm />
        </section>
        {/* <footer className="">
        <button className="button is-success">Save changes</button>
        <button className="button" onClick={setShowModal}>Cancel</button>
      </footer> */}
      </div>
    </div>
  ) : null;
};

export default Modal;
