import "./Section.scss";

export default function Section({ title, description, children }) {
  return (
    <section id="my-project">
      <h2 className="title">{title}</h2>
      <p className="des">{description}</p>
      <div className="grid-container">{children}</div>
    </section>
  );
}
