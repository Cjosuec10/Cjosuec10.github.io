import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Inicio.JPG";
import projImg2 from "../assets/img/captura2.JPG";
import projImg3 from "../assets/img/captura3.JPG";
import projImg4 from "../assets/img/captura4.JPG";
import projImg5 from "../assets/img/captura5.JPG";
import projImg6 from "../assets/img/captura6.JPG";
import projImg7 from "../assets/img/captura7.JPG";
import projImg8 from "../assets/img/captura8.JPG";
import projImg9 from "../assets/img/captura9.JPG";
import projImg10 from "../assets/img/captura10.JPG";
import projImg11 from "../assets/img/captura11.JPG";
import projImg12 from "../assets/img/captura12.JPG";
import projImg13 from "../assets/img/captura13.JPG";
import projImg14 from "../assets/img/captura14.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logoHtml5 from "../assets/img/html5.svg";
import logoBootstrap5 from "../assets/img/bootstrap5.svg"; 
import logocss3 from "../assets/img/css3.svg";
import logoJavascript from "../assets/img/javascript.svg";
import logoPhp from "../assets/img/php.svg";
import logolaravel from "../assets/img/laravel.svg";
export const Projects = () => {

 const projects = [
    {
      title: "SISTEMA DE CONTROL DE ASISTENCIA CTPL",
      imgUrl: projImg1,
 
      detailedImages: [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6], 
      fullInfo: "Este sistema de gestión de asistencia revoluciona el control del comedor estudiantil en el CTPL. Mediante la digitalización del registro, se garantiza una distribución eficiente de los alimentos y se reducen los tiempos de espera, permitiendo una supervisión administrativa en tiempo vivo de gran impacto operativo",
      technologies: [
      { title: "Html", img: logoHtml5 },
      { title: "Php", img: logoPhp },
      { title: "Css3", img: logocss3 },
      { title: "Javascript", img: logoJavascript },
      { title: "Bootstrap5", img: logoBootstrap5 }
      ]
    },
    {
      title: "TICOBLUE",
      imgUrl: projImg7,
      detailedImages: [projImg7, projImg8, projImg9, projImg10, projImg11, projImg12, projImg13, projImg14],
      fullInfo: "Desarrollo de una plataforma digital de conexión comercial enfocada en la promoción de negocios locales dentro de las Zonas Azules. El sistema integra módulos de reserva y contacto directo para servicios de alojamiento y restauración, optimizando la visibilidad de pequeños emprendimientos y mejorando la experiencia de búsqueda del usuario",
      technologies: [
        { title: "Html", img: logoHtml5 },
      { title: "Php", img: logoPhp },
      { title: "Css3", img: logocss3 },
      { title: "Javascript", img: logoJavascript },
      { title: "Bootstrap5", img: logoBootstrap5 },
      { title: "Laravel", img: logolaravel }
      ]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Proyectos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contactame</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CV</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
