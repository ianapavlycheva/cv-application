import '../styles/CVPreview.css';
export default function CVPreview({ general, education }) {
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
    </div>
    </div>
  );
}
          