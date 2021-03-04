import React from "react";
import "./index.css";

const ConnectModal = ({
  showModal,
  setShowModal,
  modalTitle,
  description
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
          <p style={{color: "white"}}>{description}</p>
        </section>
      </div>
    </div>
  ) : null;
};

export default ConnectModal;
