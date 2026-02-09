import colorSharp from "../assets/img/color-sharp.png";
import logoDocker from "../assets/img/docker.svg";
import logoJs from "../assets/img/javascript.svg";
import logoReact from "../assets/img/react.svg";
import logoNode from "../assets/img/node.svg";
import logophp from "../assets/img/php.svg";
import logoGit from "../assets/img/git.svg";
import logoHtml5 from "../assets/img/html5.svg";
import logoCss3 from "../assets/img/css3.svg"; 
import logoBootstrap5 from "../assets/img/bootstrap5.svg"; 
import logoDjango from "../assets/img/django.svg";
import logoMysql from "../assets/img/mysql.svg";
import logoSqlServer from "../assets/img/sqlserver.svg";
import logoFirebase from "../assets/img/firebase.svg";
import logoGithub from "../assets/img/github.svg";
import logoGitlab from "../assets/img/gitlab.svg";
import logoTailwind from "../assets/img/tailwind.svg";
import logoWordpress from "../assets/img/wordpress.svg";
import logoFigma from "../assets/img/figma.svg";
import logoPostman from "../assets/img/postman.svg";
import logoVisualStudioCode from "../assets/img/visual-studio-code.svg";
import logoTrello from "../assets/img/trello.svg";
import logoazureDevOps from "../assets/img/azureDevOps.svg";
import logopython from "../assets/img/python.svg";
import logolaravel from "../assets/img/laravel.svg";

export const Skills = () => {
  const skillsData = [
    { title: "Docker", img: logoDocker },
    { title: "JavaScript", img: logoJs },
    { title: "React", img: logoReact },
    { title: "Node.js", img: logoNode },
    { title: "Python", img: logopython }, 
    { title: "Git", img: logoGit },  
    { title: "Php", img: logophp },  
    { title: "Html5", img: logoHtml5 },
    { title: "Bootstrap5", img: logoBootstrap5 },
    { title: "Django", img: logoDjango },
    { title: "Trello", img: logoTrello },
    { title: "SqlServer", img: logoSqlServer },
    { title: "Firebase", img: logoFirebase },
    { title: "Css3", img: logoCss3 },
    { title: "Github", img: logoGithub },
    { title: "Gitlab", img: logoGitlab },
    { title: "Tailwind CSS", img: logoTailwind },
    { title: "Wordpress", img: logoWordpress },
    { title: "Figma", img: logoFigma },
    { title: "Postman", img: logoPostman },
    { title: "Visual Studio Code", img: logoVisualStudioCode },
    { title: "MySql", img: logoMysql },
    { title: "Azure DevOps", img: logoazureDevOps },
    { title: "Laravel", img: logolaravel },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Tecnologías que domino y utilizo en mis proyectos.</p>
              
              {/* Quitamos el Carousel y usamos un div con grid */}
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img src={skill.img} alt={skill.title} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}