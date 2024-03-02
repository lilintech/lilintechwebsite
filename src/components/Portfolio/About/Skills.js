import {
  SiPython,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMicrosoftazure,
  SiJavascript,
  SiC,
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const [certifications] = useState([
    "EC-Council (Deep Web and Cybersecurity)",
    "Cisco (Introduction to Networks)",
    "Power Learn Project (Python Programming)",
  ]);

  const [skills] = useState([
    <SiHtml5 data-tip="HTML5" className="ic-but" />,
    <SiCss3 data-tip="CSS3" className="ic-but" />,
    <SiMicrosoftazure data-tip="Azure Cloud" className="ic-but" />,
    <SiPython data-tip="Python" className="ic-but" />,
    <SiJavascript data-tip="Javascript" className="ic-but" />,
    <SiFirebase data-tip="Firebase" className="ic-but" />,
    <SiFlutter data-tip="Flutter" className="ic-but" />,
    <SiC data-tip="C" className="ic-but" />,

  ]);

  return (
    <div className="skills-card">
      <h1 className="skills-heading">Skills</h1>
      <ul className="list-inline dev-icons">
        {skills.map((skill) => (
          <li className="list-inline-item">{skill}</li>
        ))}
      </ul>
      <br />
      <h1 className="cert-heading">Certifications</h1>
      <ul className="cert-list">
        {certifications.map((certification) => (
          <li className="cert-content">▪ {certification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
