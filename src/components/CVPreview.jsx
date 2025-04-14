import '../styles/CVPreview.css';
export default function CVPreview({ general, education, experience }) {
  return (
    <div>
        <div className="cv-preview-header">
        <h2>CV Preview</h2>
      </div>
    <div className="cv-page">
      <section>
        <h3>General Info</h3>
        <p><strong>Name:</strong> {general?.name || ''}</p>
        <p><strong>Email:</strong> {general?.email || ''}</p>
        <p><strong>Phone:</strong> {general?.phone || ''}</p>
      </section>

      <section>
        <h3>Education</h3>
        {education?.length > 0 ? (
          education.map((edu, index) => (
            <div className="education-entry" key={index}>
              <p><strong>{edu.institution}</strong></p>
              <p>{edu.degree}</p>
              <p><em>{edu.startDate} – {edu.endDate}</em></p>
            </div>
      ))
  ) : (
    <p>No education info added.</p>
  )}
</section>

      <section>
        <h3>Experience</h3>
          {experience?.length > 0 ? (
            experience.map((exp, index) => (
              <div className="experience-entry" key={index}>
                <p><strong>{exp.company}</strong></p>
                <p>{exp.position}</p>
                <p><em>{exp.startDate} – {exp.endDate}</em></p>
               <p>{exp.description}</p>
              </div>
           ))
  ) : (
    <p>No experience info added.</p>
  )}
</section>
        
    </div>
    </div>
  );
}
          