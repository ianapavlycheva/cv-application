import { useState } from 'react';
import '../styles/ExperienceSection.css';

export default function ExperienceSection({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onSubmit(experience);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="company" value={experience.company} onChange={handleChange} placeholder="Company" />
          <input name="position" value={experience.position} onChange={handleChange} placeholder="Position" />
          <input name="startDate" value={experience.startDate} onChange={handleChange} placeholder="Start Date" />
          <input name="endDate" value={experience.endDate} onChange={handleChange} placeholder="End Date" />
          <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Job Description" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>From:</strong> {experience.startDate} to {experience.endDate}</p>
          <p>{experience.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}