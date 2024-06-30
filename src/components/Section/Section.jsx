import "./Section.scss";

export default function Section({ title, description, children, ...props }) {
  return (
    <section className="section-bar" {...props}>
      <h2 className="title">{title}</h2>
      <p className="des">{description}</p>
      <div className="grid-container">{children}</div>
    </section>
  );
}
