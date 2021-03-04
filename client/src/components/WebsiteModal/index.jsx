import React from "react";
import WebsiteForm from "../WebsiteForm/index";
import "./index.css";

const WebsiteModal = ({
  showModal,
  setShowModal,
  modalTitle,
  website,
  setWebsite,
  submitWebsite
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
          <WebsiteForm  website={website} setWebsite={setWebsite} submitWebsite={submitWebsite} />
        </section>
      </div>
    </div>
  ) : null;
};

export default WebsiteModal;
