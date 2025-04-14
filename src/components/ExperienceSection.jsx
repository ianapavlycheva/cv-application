import { useState } from 'react';
import '../styles/ExperienceSection.css';

export default function ExperienceSection({ experienceList, setExperienceList }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedList = [...experienceList];
            updatedList[editingIndex] = formData;
            setExperienceList(updatedList);
            setEditingIndex(null);
        } else {
            setExperienceList([...experienceList, formData]);
        }

        setFormData({ company: '', position: '', startDate: '', endDate: '', description: '' });
    };

    const handleEdit = (index) => {
        setFormData(experienceList[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = experienceList.filter((_, i) => i !== index);
        setExperienceList(updatedList);
        if (editingIndex === index) {
            setFormData({ company: '', position: '', startDate: '', endDate: '', description: '' });
            setEditingIndex(null);
        }
    };

  return (
    <div className="section">
            <h2>Experience</h2>
            <form onSubmit={handleSubmit}>
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
                <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" />
                <input name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" />
                <input name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
                <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
            </form>

            <ul>
                {experienceList.map((entry, index) => (
                    <li key={index}>
                        <p><strong>{entry.company}</strong> – {entry.position}</p>
                        <p>{entry.startDate} to {entry.endDate}</p>
                        <p><strong>{entry.description}</strong></p>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
  );
}