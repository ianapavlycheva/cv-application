import { useState } from 'react';
import '../styles/EducationSection.css';

export default function EducationSection({ educationList, setEducationList }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedList = [...educationList];
            updatedList[editingIndex] = formData;
            setEducationList(updatedList);
            setEditingIndex(null);
        } else {
            setEducationList([...educationList, formData]);
        }

        setFormData({ institution: '', degree: '', startDate: '', endDate: '' });
    };

    const handleEdit = (index) => {
        setFormData(educationList[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
        if (editingIndex === index) {
            setFormData({ institution: '', degree: '', startDate: '', endDate: '' });
            setEditingIndex(null);
        }
    };

    return (
        <div className="section">
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
                <input name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution" />
                <input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" />
                <input name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" />
                <input name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
                <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
            </form>

            <ul>
                {educationList.map((entry, index) => (
                    <li key={index}>
                        <p><strong>{entry.institution}</strong> – {entry.degree}</p>
                        <p>{entry.startDate} to {entry.endDate}</p>
                        <button type="button" className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                        <button type="button" className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}