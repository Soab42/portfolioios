import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
export default function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {/* <h1 className="title">Projects</h1> */}
      <div className=""></div>
      <div
        className="projectsList"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Link to={`${project.id}`} key={project.title}>
            <div className="projectCard">
              <img src={project.imgLink} alt={project.title} />
              <h1>{project.title}</h1>
            </div>
          </Link>
        ))}
        <style jsx>{`
          .projects {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            text-align: center;
          }
          .title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text);
            text-align: center;
            width: 100%;
          }
        `}</style>
      </div>
    </section>
  );
}
