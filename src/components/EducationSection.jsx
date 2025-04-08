import { useState } from 'react';
import '../styles/EducationSection.css';

export default function EducationSection({ onSubmit }) {
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        setEducation({ ...education, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        onSubmit(education);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="institution" value={education.institution} onChange={handleChange} placeholder="Institution" />
          <input name="degree" value={education.degree} onChange={handleChange} placeholder="Degree" />
          <input name="startDate" value={education.startDate} onChange={handleChange} placeholder="Start Date" />
          <input name="endDate" value={education.endDate} onChange={handleChange} placeholder="End Date" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Institution:</strong> {education.institution}</p>
          <p><strong>Degree:</strong> {education.degree}</p>
          <p><strong>From:</strong> {education.startDate} to {education.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}