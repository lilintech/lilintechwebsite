import {
  SiPython,
  SiAndroid,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
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
    <SiPython data-tip="Python" className="ic-but" />,
    <SiAndroid data-tip="Android Appdev" className="ic-but" />,
    <SiAndroidstudio data-tip="Android Studio" className="ic-but" />,
    <SiHtml5 data-tip="HTML5" className="ic-but" />,
    <SiCss3 data-tip="CSS3" className="ic-but" />,
    <SiJavascript data-tip="JavaScript" className="ic-but" />,
    <SiCplusplus data-tip="C++" className="ic-but" />,
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
