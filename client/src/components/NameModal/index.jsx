import React from "react";
import NameForm from "../NameForm/index";
import "./index.css";

const NameModal = ({
  showModal,
  setShowModal,
  modalTitle,
  name,
  setName,
  submitName
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
          <NameForm  name={name} setName={setName} submitName={submitName} />
        </section>
      </div>
    </div>
  ) : null;
};

export default NameModal;
