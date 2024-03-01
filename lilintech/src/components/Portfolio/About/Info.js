import profile_pic from "../../../assets/images/profile.jpeg";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="Lilian"/>
      </div>
      <div className="about-me">
        <h1>Lilian Wanjiku</h1>
        <br />
        <p className="profile-description">
        Hello there! I'm here to share insights on technology, programming, and fascinating discoveries within the constantly evolving tech landscape. As I lift the digital veil, I'm Lilian Wanjiku, or you can simply call me Lily. Join me on this exciting journey of exploration through the vast world of technology on this website. I hope you enjoy the adventure! Feel free to connect with me here.
        </p>
        <br />
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://linkedin.com/in/lilintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-icon"
            href="https://github.com/lilintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon"
            href="https://youtube.com/@lilintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube/>
          </a>
          <a
            className="social-icon"
            href="https://instagram.com/lilintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram/>
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/lilintech"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
