import React, { useEffect, useState } from "react";
import Header from "../components/Header_Signed_In/index";
import RecruiterMenu from "../components/RecruiterMenu/index";
import PositionsModal from "../components/PositionsModal/index";
import CompanyModal from "../components/CompanyModal/index";
import OpenPositionsModal from "../components/OpenPositionsModal/index";
import WebsiteModal from "../components/WebsiteModal/index";
import NameModal from "../components/NameModal/index";
import axios from "axios";

const id = "6036a59fba6a2a7814a525c4";

// Show Profile Content
function UserProfile() {
  function refreshPage() {
    window.location.reload(false);
  }

  // Set default userdata in useState

  const [userdata, setUserdata] = useState({
    name: "Loading Username...",
    bio: "Loading Bio...",
    src:
      "https://uploads-ssl.webflow.com/5fb3fc6bd1d36b4a29a77ac3/60408c28abcdabd07045d8bc_placeholder-male.gif",
    position: ["Loading Positions..."],
    open_positions: { title: "Loading Open Positions" },
    Website: ["Loading Website..."],
    Ikigai: ["Loading Website..."],
  });

  // Default Modals to not show content
  const [showPositionsModal, setShowPositionsModal] = useState(false);
  const [showOpenPositionsModal, setShowOpenPositionsModal] = useState(false);
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [showCompanyModal, setShowCompanyModal] = useState(false);

  // Toggles whether to display modal or not
  const togglePositionsModal = () => {
    setShowPositionsModal((prev) => !prev);
  };
  const toggleOpenPositionsModal = () => {
    setShowOpenPositionsModal((prev) => !prev);
  };
  const toggleWebsiteModal = () => {
    setShowWebsiteModal((prev) => !prev);
  };
  const toggleNameModal = () => {
    setShowNameModal((prev) => !prev);
  };
  const toggleCompanyModal = () => {
    setShowCompanyModal((prev) => !prev);
  };

  // Api called on page load (UseEffect) that gets the profiles data based on ID
  useEffect(() => {
    axios.get("/api/recruiter/" + id).then((response) => {
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
    });
  }, []);

  // Update the changed Bio via axios
  const submitPosition = (e) => {
    e.preventDefault();
    axios
      .put("/api/recruiter/" + id, { position: userdata.position })
      .then((response) => {
        console.log(userdata.position);
        console.log(response.data);
        setUserdata({ ...userdata, ...response.data });
      });
    refreshPage();
  };

  // Update Bio data in state
  const setPosition = (event) => {
    event.preventDefault();
    console.log("change input to", userdata.position);
    setUserdata({ ...userdata, position: event.target.value });
  };

  // Update the changed Open Positions via axios
  const submitOpenPosition = (e) => {
    e.preventDefault();
    axios
      .put("/api/recruiter/" + id, {
        open_positions: userdata.open_positions.title,
      })
      .then((response) => {
        console.log(userdata.open_positions.title);
        console.log(response.data);
        setUserdata({ ...userdata, ...response.data });
      });
    refreshPage();
  };

  console.log("Open Position: " + userdata.open_positions);

  // Update Bio data in state
  const setOpenPosition = (event) => {
    event.preventDefault();
    console.log("change input to", userdata.open_positions.title);
    setUserdata({
      ...userdata,
      [event.target.open_positions.title]: event.target.value,
    });
  };

  // Update the changed Name via axios
  const submitName = (e) => {
    e.preventDefault();
    axios
      .put("/api/recruiter/" + id, { bio: userdata.bio })
      .then((response) => {
        console.log(userdata.bio);
        console.log(response.data);
        setUserdata({ ...userdata, ...response.data });
      });
    refreshPage();
  };

  // Update Name data in state
  const setName = (event) => {
    event.preventDefault();
    console.log("change input to", userdata.bio);
    setUserdata({ ...userdata, bio: event.target.value });
  };

  // Update the changed Name via axios
  const submitCompany = (e) => {
    e.preventDefault();
    axios
      .put("/api/recruiter/" + id, { company: userdata.company })
      .then((response) => {
        console.log(userdata.company);
        console.log(response.data);
        setUserdata({ ...userdata, ...response.data });
      });
    toggleCompanyModal();
    refreshPage();
  };

  // Update Name data in state
  const setCompany = (event) => {
    event.preventDefault();
    console.log("change input to", userdata.company);
    setUserdata({ ...userdata, company: event.target.value });
  };

  // Update the changed Website via axios
  const submitWebsite = (e) => {
    e.preventDefault();
    axios
      .put("/api/recruiter/" + id, { website: userdata.website })
      .then((response) => {
        console.log(userdata.website);
        console.log(response.data);
        setUserdata({ ...userdata, ...response.data });
      });
    refreshPage();
  };

  // Update Website data in state
  const setWebsite = (event) => {
    event.preventDefault();
    console.log("change input to", userdata.website);
    setUserdata({ ...userdata, website: event.target.value });
  };

  return (
    <div
      className="userProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      {/* <UserTitle position="center" title={userdata.username} /> */}
      <RecruiterMenu
        position="center"
        src={userdata.src}
        bio={userdata.bio}
        option={userdata.projects}
        id={userdata._id}
        title={userdata.name}
        company={userdata.company}
        website={userdata.website}
        openPosition={userdata.open_positions.title}
        onClickName={toggleNameModal}
        onClickCompany={toggleCompanyModal}
        onClickWebsite={toggleWebsiteModal}
        onClickPositions={togglePositionsModal}
        onClickOpenPositions={toggleOpenPositionsModal}
        recruiterPosition={userdata.position}
      />
      <PositionsModal
        showModal={showPositionsModal}
        setShowModal={togglePositionsModal}
        modalTitle={"Add a position"}
        setPosition={setPosition}
        submitPosition={submitPosition}
      />
      <WebsiteModal
        showModal={showWebsiteModal}
        setShowModal={toggleWebsiteModal}
        modalTitle={"Add your Website"}
        setWebsite={setWebsite}
        submitWebsite={submitWebsite}
      />
      <NameModal
        showModal={showNameModal} //Default false value that makes modal invisable
        setShowModal={toggleNameModal} //The add button that brings up the modal
        modalTitle={"Change your Bio"} //Title of the Modal (Doesn't have to be here)
        setName={setName} //sets the title to what is being typed in the inputfield
        submitName={submitName} //Sends the api put request to update the user's title
      />
      <CompanyModal
        showModal={showCompanyModal} //Default false value that makes modal invisable
        setShowModal={toggleCompanyModal} //The add button that brings up the modal
        modalTitle={"Change yourCompany"} //Title of the Modal (Doesn't have to be here)
        setCompany={setCompany} //sets the title to what is being typed in the inputfield
        submitCompany={submitCompany} //Sends the api put request to update the user's title
      />
      <OpenPositionsModal
        showModal={showOpenPositionsModal} //Default false value that makes modal invisable
        setShowModal={toggleOpenPositionsModal} //The add button that brings up the modal
        modalTitle={"Change your Open Position"} //Title of the Modal (Doesn't have to be here)
        setOpenPosition={setOpenPosition} //sets the title to what is being typed in the inputfield
        submitOpenPosition={submitOpenPosition} //Sends the api put request to update the user's title
      />
    </div>
  );
}

export default UserProfile;
