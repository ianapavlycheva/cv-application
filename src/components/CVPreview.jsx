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
          {education?.institution && (
            <div className="education-entry">
              <p><strong>{education.institution}</strong></p>
              <p>{education.degree}</p>
              <p>
                <em>{education.startDate} – {education.endDate}</em>
              </p>
            </div>
          )}
        </section>

        <section>
          <h3>Experience</h3>
          {experience?.company && (
            <div className="experience-entry">
              <p><strong>{experience.company}</strong></p>
              <p>{experience.position}</p>
              <p><em>{experience.startDate} – {experience.endDate}</em></p>
              <p>{experience.description}</p>
            </div>
          )}
        </section>
        
    </div>
    </div>
  );
}
          