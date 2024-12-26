import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";
import Preview from "./preview"
import "./styles.css"
import { useState } from "react";

function App() {
  const [educationCounter, setEducationCounter] = useState(0);
  const [experienceCounter, setExperienceCounter] = useState(0);

  const [userData, setUserData] = useState({name: "", address: "", email: "", phone: ""});

  const [educationData, setEducationData] = useState([]);

  const [experienceData, setExperienceData] = useState([]);

  const handlePersonalChange = () => {
    const name = event.target.id;
    const value = event.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const [educationModalOpen, setEducationModalOpen] = useState(false);

  const handleEducationOpen = () => {
    setEducationModalOpen(true);
  }

  const handleEducationClose = () => {
    setEducationModalOpen(false);
  }

  const [editEducationModalOpen, setEditEducationModalOpen] = useState(false);
  const [editEducationIndex, setEditEducationIndex] = useState(null);

  const handleEditEducationModalOpen = () => {
    setEditEducationModalOpen(true);
    setEditEducationIndex(event.target.parentNode.parentNode.classList[1].split("_")[2]);
  }

  const handleEditEducationModalClose = () => {
    setEditEducationModalOpen(false);
  }

  const handleEditEducationModalSave = () => {
    const name = event.target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const degree = event.target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const start_date = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].value.replaceAll("-" , "/");
    const end_date = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].value.replaceAll("-" , "/");
    const location = event.target.parentNode.parentNode.childNodes[3].childNodes[1].value;

    const name_id = event.target.parentNode.parentNode.childNodes[0].childNodes[1].id;
    const degree_id = event.target.parentNode.parentNode.childNodes[1].childNodes[1].id;
    const start_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].id;
    const end_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].id;
    const location_id = event.target.parentNode.parentNode.childNodes[3].childNodes[1].id;

    let newEducationData = [...educationData];
    newEducationData[editEducationIndex] = {id: educationData[editEducationIndex].id, [name_id]: name, [degree_id]: degree, [start_date_id]: start_date, [end_date_id]: end_date, [location_id]: location}
    setEducationData(newEducationData);
    handleEditEducationModalClose();
  }

  const handleEducationSave = () => {
    const name = event.target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const degree = event.target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const start_date = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].value.replaceAll("-" , "/");
    const end_date = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].value.replaceAll("-" , "/");
    const location = event.target.parentNode.parentNode.childNodes[3].childNodes[1].value;

    const name_id = event.target.parentNode.parentNode.childNodes[0].childNodes[1].id;
    const degree_id = event.target.parentNode.parentNode.childNodes[1].childNodes[1].id;
    const start_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].id;
    const end_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].id;
    const location_id = event.target.parentNode.parentNode.childNodes[3].childNodes[1].id;

    setEducationData([...educationData, {id: educationCounter, [name_id]: name, [degree_id]: degree, [start_date_id]: start_date, [end_date_id]: end_date, [location_id]: location}]);
    setEducationCounter(educationCounter + 1);
    handleEducationClose();
  }

  const handleEducationDelete = () => {
    let index = event.target.parentNode.parentNode.classList[1].split("_")[2];
    let newEducationData = [...educationData];
    newEducationData.splice(index, 1);
    setEducationData(newEducationData);
  }

  const [experienceModalOpen, setExperienceModalOpen] = useState(false);

  const handleExperienceOpen = () => {
    setExperienceModalOpen(true);
  }

  const handleExperienceClose = () => {
    setExperienceModalOpen(false);
  }

  function handleExperienceSave(){
    const name = event.target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const position = event.target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const start_date = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].value.replaceAll("-" , "/");
    const end_date = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].value.replaceAll("-" , "/");
    const location = event.target.parentNode.parentNode.childNodes[3].childNodes[1].value;
    const description = event.target.parentNode.parentNode.childNodes[4].childNodes[1].value;

    const name_id = event.target.parentNode.parentNode.childNodes[0].childNodes[1].id;
    const position_id = event.target.parentNode.parentNode.childNodes[1].childNodes[1].id;
    const start_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].id;
    const end_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].id;
    const location_id = event.target.parentNode.parentNode.childNodes[3].childNodes[1].id;
    const description_id = event.target.parentNode.parentNode.childNodes[4].childNodes[1].id;

    let newExperienceData = [...experienceData];
    newExperienceData.push({id: experienceCounter, [name_id]: name, [position_id]: position, [start_date_id]: start_date, [end_date_id]: end_date, [location_id]: location, [description_id]: description});
    setExperienceData(newExperienceData);
    setExperienceCounter(experienceCounter + 1);
    handleExperienceClose();
  }

  const handleExperienceDelete = () => {
    let index = event.target.parentNode.parentNode.classList[1].split("_")[2];
    let newExperienceData = [...experienceData];
    newExperienceData.splice(index, 1);
    setExperienceData(newExperienceData);
  }

  const [editExperienceModalOpen, setEditExperienceModalOpen] = useState(false);
  const [editExperienceIndex, setEditExperienceIndex] = useState(null);

  const handleEditExperienceModalOpen = () => {
    setEditExperienceModalOpen(true);
    setEditExperienceIndex(event.target.parentNode.parentNode.classList[1].split("_")[2]);
  }

  const handleEditExperienceModalClose = () => {
    setEditExperienceModalOpen(false);
  }

  const handleEditExperienceModalSave = () => {
    const name = event.target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const position = event.target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const start_date = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].value.replaceAll("-" , "/");
    const end_date = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].value.replaceAll("-" , "/");
    const location = event.target.parentNode.parentNode.childNodes[3].childNodes[1].value;
    const description = event.target.parentNode.parentNode.childNodes[4].childNodes[1].value;

    const name_id = event.target.parentNode.parentNode.childNodes[0].childNodes[1].id;
    const position_id = event.target.parentNode.parentNode.childNodes[1].childNodes[1].id;
    const start_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].id;
    const end_date_id = event.target.parentNode.parentNode.childNodes[2].childNodes[1].childNodes[1].id;
    const location_id = event.target.parentNode.parentNode.childNodes[3].childNodes[1].id;
    const description_id = event.target.parentNode.parentNode.childNodes[4].childNodes[1].id;

    let newExperienceData = [...experienceData];
    newExperienceData[editExperienceIndex] = {id: experienceCounter, [name_id]: name, [position_id]: position, [start_date_id]: start_date, [end_date_id]: end_date, [location_id]: location, [description_id]: description};
    setExperienceData(newExperienceData);
    handleEditExperienceModalClose();
  }

  return (
    <div className="container">
      <div className="sidebar">
        <Personal onChange={handlePersonalChange} userData={userData} />

        <Education educationModalOpen={educationModalOpen} handleEducationOpen={handleEducationOpen} 
        handleEducationClose={handleEducationClose} handleEducationSave={handleEducationSave} educationData={educationData} 
        handleEducationDelete={handleEducationDelete} editEducationModalOpen={editEducationModalOpen} 
        handleEditEducationModalOpen={handleEditEducationModalOpen} handleEditEducationModalClose={handleEditEducationModalClose} 
        handleEditEducationModalSave={handleEditEducationModalSave} editEducationIndex={editEducationIndex}/>

        <Experience experienceModalOpen={experienceModalOpen} handleExperienceOpen={handleExperienceOpen}
        handleExperienceClose={handleExperienceClose} handleExperienceSave={handleExperienceSave} experienceData={experienceData}
        handleExperienceDelete={handleExperienceDelete} editExperienceModalOpen={editExperienceModalOpen} 
        handleEditExperienceModalOpen={handleEditExperienceModalOpen} handleEditExperienceModalClose={handleEditExperienceModalClose} 
        handleEditExperienceModalSave={handleEditExperienceModalSave} editExperienceIndex={editExperienceIndex}/>
      </div>
      <Preview userData={userData} educationData={educationData} experienceData={experienceData}/>
    </div>
  )
}

export default App
