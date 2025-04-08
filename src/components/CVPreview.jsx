import '../styles/CVPreview.css';
export default function CVPreview({ general }) {
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
    </div>
    </div>
  );
}
