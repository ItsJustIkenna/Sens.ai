import React from "react";
import OpenPositionsForm from "../OpenPositionsForm/index";
import "./index.css";

const OpenPositionsModal = ({
  showModal,
  setShowModal,
  modalTitle,
  openPosition,
  setOpenPosition,
  submitOpenPosition
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
          <OpenPositionsForm  openPosition={openPosition} setOpenPosition={setOpenPosition} submitOpenPosition={submitOpenPosition} />
        </section>
      </div>
    </div>
  ) : null;
};

export default OpenPositionsModal;
