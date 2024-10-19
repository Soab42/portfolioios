import React from "react";
import { educations } from "../../data/education";
export default function Educations() {
  return (
    <section id="education" className="education">
      {/* <h1 className="title">i have Completed Major so far</h1> */}

      <div className="educationList">
        {educations.map((education) => (
          <div className="educationCard" key={education.title}>
            <div>
              <h1>{education.title}</h1>
              <p>{education.name}</p>
              <p>{education.institution}</p>
              <p>{education.duration}</p>
              <p>{education.group}</p>
              {/* <a
                href={education.certificate}
                target="_blank"
                className="certificate"
              >
                Certificate
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
