import React from "react";
import CompanyForm from "../CompanyForm/index";
import "./index.css";

const CompanyModal = ({
  showModal,
  setShowModal,
  modalTitle,
  company,
  setCompany,
  submitCompany
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
          <CompanyForm  company={company} setCompany={setCompany} submitCompany={submitCompany} />
        </section>
      </div>
    </div>
  ) : null;
};

export default CompanyModal;
