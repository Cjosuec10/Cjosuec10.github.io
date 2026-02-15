import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Yo.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Download } from 'lucide-react';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Ingeniero en Sistemas de Información", "Desarrollador Web", "Diseñador Web" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a mi portafolio</span>
                <h1>{`Hola! Soy Josué`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Ingeniero en Sistemas de Información", "Desarrollador Web", "Diseñador Web" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Profesional egresado en Ingeniería en Sistemas de Información, con un enfoque proactivo y autodidacta. 
Poseo experiencia en desarrollo fullstack y diseño web funcional. Mi enfoque está en crear soluciones de 
software completas, desde el diseño visual hasta la implementación técnica, y me distingo por la 
adaptabilidad y la capacidad de aprendizaje rápido para afrontar retos tecnológicos complejos. </p>
               <button 
  className="cv-download-btn"
  onClick={() => {
   
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Josue_CV.pdf`; 
    link.download = 'Josue_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <span>Resume</span> <Download size={25} />
</button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
           <TrackVisibility partialVisibility> 
  {({ isVisible }) => (
    <div style={{ minHeight: '300px', display: 'flex', justifyContent: 'center' }}> 
     
      <div className={isVisible ? "animate__animated animate__zoomIn" : "invisible-state"}>
        <img 
          src={headerImg} 
          alt="Header Img" 
          style={{ width: '300px', height: 'auto' }} 
        />
      </div>
    </div>
  )}
</TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
