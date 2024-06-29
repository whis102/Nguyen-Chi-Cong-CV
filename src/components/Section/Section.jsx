import "./Section.scss";

export default function Section({ title, children }) {
  return (
    <section id="my-project">
      <h2 className="title">{title}</h2>
      <div className="grid-container">{children}</div>
    </section>
  );
}
