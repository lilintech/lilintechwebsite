import { useState } from "react";
const Achievements = ({openMenu}) => {
  const [achievements] = useState([
    "1st place Winner at CA Cybersecurity Hackathon, Nyeri Edition (2023).",
    "1st place winner at Mt Kenya Bush Hack (2022).",
    "Microsoft Learn Student Ambassador (2022 - Present).",
    "Silver Award in The Queen's Commonwealth Essay Competition (2022).",
  ]);
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <div className="skills-card">
        <h1 className="achievements-heading">Achievements</h1>
        <br />
        <ul className="cert-list">
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
