import React from "react";
import TitleForm from "../TitleForm/index";
import "./index.css";

const TitleModal = ({
  showModal,
  setShowModal,
  modalTitle,
  title,
  setTitle,
  submitTitle
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
          <TitleForm  title={title} setTitle={setTitle} submitTitle={submitTitle} />
        </section>
      </div>
    </div>
  ) : null;
};

export default TitleModal;
