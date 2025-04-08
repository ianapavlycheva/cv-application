import { useState } from 'react';
import '../styles/PersonalDetailsSection.css';
export default function PersonalDetailsSection({ onSubmit }) {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        onSubmit(info);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="section">
            <h2>General Information</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
                    <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p><strong>Name:</strong> {info.name}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <p><strong>Phone:</strong> {info.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
                )}
        </div>
  );
}