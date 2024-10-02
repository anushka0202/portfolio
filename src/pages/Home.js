import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
// import illustrationImage from "../assets/illustration.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        {/* <img className="illustrationImage" src={illustrationImage} /> */}
        <h2>Hi, my name is Anushka</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/anushka-raj-bagun-9789b4195/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/anushka0202"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:anuraj.bagun02@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, TypeScript, C++</span>
          </li>
          <li className="item">
            <h2>Tools and Frameworks</h2>
            <span>
              React.js, Redux, Next.js, Tailwind CSS, Material UI, shadcn/ui,
              HTML5, CSS, Git, Jira
            </span>
          </li>
          <li className="item">
            <h2>Relevant Concepts</h2>
            <span>
              Data Structures and Algorithms (DSA), Object-Oriented Programming
              (OOP), Databases
            </span>
          </li>
          <li className="item">
            <h2>Certifications</h2>
            <span>
              <a
                href="https://www.linkedin.com/learning/certificates/2cea0bd365302253e8925a26e4025c0d1072ed9c688fd12fdd9a14325af17b90"
                target="_blank"
                rel="noreferrer"
              >
                Hands-On Introduction: React (LinkedIn)
              </a>
              ,{" "}
              <a
                href="https://drive.google.com/file/d/1zD0eqJjS3LqX185rKDHhN5NM_d3978U6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Web Development (QSTP, BITS Goa)
              </a>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
