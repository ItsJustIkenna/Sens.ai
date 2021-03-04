import React from "react";
import PositionsForm from "../PositionsForm/index";
import "./index.css";

const PositionsModal = ({
  showModal,
  setShowModal,
  modalTitle,
  position,
  setPosition,
  submitPosition
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
          <PositionsForm  position={position} setPosition={setPosition} submitPosition={submitPosition} />
        </section>
      </div>
    </div>
  ) : null;
};

export default PositionsModal;
