import React, { useEffect, useState } from "react";
import Header from "../components/Header_Signed_In/index";
import UserMenu from "../components/UserMenu/index";
import ProjectModal from "../components/ProjectsModal/index";
import BioModal from "../components/BioModal/index";
import TitleModal from "../components/TitleModal/index";
import axios from "axios";

const id = "6040b382f6eaa34908374058";

function refreshPage() {
  window.location.reload(false);
}

// Show Profile Content
function UserProfile() {


  // Set default userdata in useState
  const [userdata, setUserdata] = useState({
    username: "Loading Username...",
    bio: "Loading Bio...",
    src: "https://uploads-ssl.webflow.com/5fb3fc6bd1d36b4a29a77ac3/6040b003176ad3ea2bdbc737_20200731-DSCF6012-2.jpg",
    projects: ["Loading Projects..."],
  });


  // Default Modals to not show content
  const [showBioModal, setShowBioModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  // Toggles whether to display modal or not
  const toggleBioModal = () => {
    setShowBioModal((prev) => !prev);
  };
  const toggleTitleModal = () => {
    setShowTitleModal((prev) => !prev);
  };
  const toggleProjectModal = () => {
    setShowProjectModal((prev) => !prev);
  };

  // Api called on page load (UseEffect) that gets the profiles data based on ID
  useEffect(() => {
    axios.get("/api/recruitee/" + id).then((response) => {
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
    });
  }, []);


  // Update the changed Bio via axios
  const submitBio = (e) => {
     e.preventDefault();
    axios.put("/api/recruitee/" + id, {bio: userdata.bio}).then((response) => {
      console.log(userdata.bio);
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
    });
    toggleBioModal()
    refreshPage()
  }

  // Update Bio data in state
  const setProjectBio = (event) => {
    event.preventDefault();
    console.log("change input to" , userdata.bio);
    setUserdata({...userdata, bio: event.target.value})
  }



// Update the changed Title via axios
  const submitTitle = (e) => {
     e.preventDefault();
    axios.put("/api/recruitee/" + id, {name: userdata.name}).then((response) => {
      console.log(userdata.name);
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
    });
    toggleTitleModal();
    refreshPage()
  }

  // Update Title data in state
  const setTitle = (event) => {
    event.preventDefault();
    console.log("change input to" , userdata.name);
    setUserdata({...userdata, name: event.target.value})
  }


// Delete a Project via axios
  const deleteProject = (e) => {
     //e.preventDefault();
     console.log(e.target.value);
    axios.delete("/api/projects/" + e.target.value).then((response) => {
      console.log(e.target.value);
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
    }); 
    refreshPage()
  }

// Create a new Project via axios
  const submitProject = (e) => {
     e.preventDefault();
     console.log({projects: userdata.projects})
    axios.post("/api/projects/" , {projects: userdata.projects}).then((response) => {
      console.log(userdata.projects);
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
      toggleProjectModal();
      refreshPage()
    });
  }

  // Create A Project in state
  const setProject = (event) => {
    event.preventDefault();
    console.log("change input to" , event.target.value);
    setUserdata({...userdata, [event.target.projects]: event.target.value})
  }


  return (
    <div
      className="userProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      {/* <UserTitle position="center" title={userdata.username} /> */}
      <UserMenu
        position="center"
        src={userdata.src}
        bioDes={userdata.bio}
        option={userdata.projects}
        id={userdata._id}
        title={userdata.name}
        onClickBio={toggleBioModal}
        onClickTitle={toggleTitleModal}
        onClickProjects={toggleProjectModal}
        deleteProject={deleteProject}
      />
      <div className="column"></div>
      {/* <CRUDMenu /> */}
      <ProjectModal
        showModal={showProjectModal}
        setShowModal={toggleProjectModal}
        modalTitle={"Add a project"}
        setProject={setProject}
        submitProject={submitProject}
        deleteProject={deleteProject}
      />
      <BioModal
        showModal={showBioModal}
        setShowModal={toggleBioModal}
        modalTitle={"Add your Bio"}
        setProjectBio={setProjectBio}
        submitBio={submitBio}
      />
      <TitleModal
        showModal={showTitleModal} //Default false value that makes modal invisable
        setShowModal={toggleTitleModal} //The add button that brings up the modal
        modalTitle={"Change your name"} //Title of the Modal (Doesn't have to be here)
        setTitle={setTitle} //sets the title to what is being typed in the inputfield
        submitTitle={submitTitle} //Sends the api put request to update the user's title
      />
      <div className="container is-widescreen"></div>
    </div>
  );
}

export default UserProfile;
