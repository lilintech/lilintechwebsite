import Project from "./Project";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "Battlescores",
      description:
        "A website that tracks your progress in exams and helps you improve on subjects you perform poorly in. Created by Festus Gitahi and Lilian Wanjiku",
      link: "https://github.com/lilintech/battlescores",
      show: true,
    },
    {
      id: 2,
      title: "Soctrify",
      description:
        "A hardware prototype that is able to utilize sound vibrations from noise and convert it to electricity. Awarded 1st Place in the Mt Kenya Bush Hack (2022). Innovated by Lilian Wanjiku and Eleanora Nyakio.",
      link: "https://youtu.be/jwWSQpv6gv8?si=kngmYqNsukidltVd",
      show: true,
    },
    {
      id: 3,
      title: "GossipGirl",
      description:
        "Twitter Web Scraper with Sentiment Analysis that picks topics from Twitter and analyzes the sentiment of the tweets. Developed by Lilian Wanjiku and Emaline Gayhart.(Still under construction)",
      link: "https://github.com/emzra-public/GossipGirl",
      show: true,
    },
    {
      id: 4,
      title: "SPACEWEIGHT: YOUR WEIGHT ON OTHER WORLDS",
      description:
        "Developed an Android app to find your weight on other planets, for example, Venus, Jupiter, etc.",
      link: "https://spaceweight.iamyajat.co/",
      show: false,
    },
    {
      id: 5,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://github.com/iamyajat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Projects;
