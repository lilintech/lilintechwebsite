import { useState } from "react";
import { FaLinkedinIn} from "react-icons/fa";
import Blog from "./Blog";

const Blogs = ({openMenu}) => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Dual Booting My Old Windows Machine",
      description:
        "A journey of my first experience with dual booting my Windows PC with BlackArch and how I fixed my storage issues during partitioning.(To be posted soon)",
      link: "",
      show: true,
    },
    {
      id: 2,
      title: "Azure Fundamentals Series",
      description: "A recording of Azure sessions I've hosted as I was learning about Azure Cloud in online study group sessions.",
      link: "https://www.youtube.com/watch?v=Bge-BlIAF-0&list=PL7NPEEqrC5-aHJE9xzUAGMslubG_Nzbis&pp=gAQBiAQB",
      show: true,
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
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://linkedin.com/in/lilintech"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </>
  );
};
export default Blogs;
