import React, { useEffect, useState } from "react";
import Header from "../components/Header_Signed_In/index";
import RecruiterSection from "../components/RecruiterSection/index";
import axios from "axios";
const id = "6036a59fba6a2a7814a525c4";

function Homepage() {
  const [projectTitle, setProjectTitle] = useState("");
  const [userdata, setUserdata] = useState({
    name: "Loading Username...",
    bio: "Loading Bio...",
    src: "https://www.placecage.com/200/300",
    position: ["Loading Positions..."],
    Website: ["Loading Website..."],
    Ikigai: ["Loading Website..."],
  });
  const [showModal, setShowModal] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const toggleBioModal = () => {
    setShowBioModal((prev) => !prev);
  };

  useEffect(() => {
    axios.get("/api/recruiter/" + id).then((response) => {
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
      setProjectTitle("");
    });
  }, []);

  const handleSubmit = () => {
    console.log(projectTitle);
  };

  return (
    <div
      className="userProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      {/* <UserTitle position="center" title={userdata.username} /> */}
      <RecruiterSection
        position="center"
        src={userdata.src}
        bioDes={userdata.bio}
        option={userdata.projects}
        id={userdata.id}
        projectTitle={projectTitle}
        title={userdata.name}
        onClick={toggleModal}
        onClickBio={toggleBioModal}
        onClickProjects={toggleModal}
      />
    </div>
  );
}

export default Homepage;
