import { useState } from 'react'
import './App.css'

import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection  from "./components/ExperienceSection";
import CVPreview from "./components/CVPreview";


function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  return (
    <div className="container">
      <div className="editor">
        <PersonalDetailsSection onSubmit={setGeneralInfo} />
        <EducationSection educationList={educationInfo} setEducationList={setEducationInfo} />
        <ExperienceSection experienceList={experienceInfo} setExperienceList={setExperienceInfo} />
      </div>
      <div className="preview">
        <CVPreview
          general={generalInfo}
          education={educationInfo}
          experience={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App
