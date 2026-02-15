import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* espaciador invisible */}
          {/* espaciador invisible */}
          <Col size={12} sm={6}>
           <span className="logo-text">
    <span className="code-bracket">&lt;</span>
    JOSUE <span className="last-name">UGALDE</span>
    <span className="code-bracket">/&gt;</span>
  </span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carlos-josu%C3%A9-ugalde-lopez/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/josue.lopez.382800/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/cjosuec_10?igsh=MWhreHMzaTJhMmNnNQ=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Derechos de autor © JOSUE UGALDE</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
