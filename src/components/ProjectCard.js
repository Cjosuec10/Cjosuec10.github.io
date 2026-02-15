import { useState } from "react";
import { Col, Modal, Carousel } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl, detailedImages, fullInfo, technologies}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        
        <div className="proj-imgbx" onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

   
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="mb-4">
            
            {detailedImages ? detailedImages.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Slide ${index}`} style={{ maxHeight: "400px", objectFit: "contain" }} />
              </Carousel.Item>
            )) : (
              <Carousel.Item>
                <img className="d-block w-100" src={imgUrl} alt="Default" />
              </Carousel.Item>
            )}
          </Carousel>
          <div className="px-3">
            <h5 style={{ color: "#ffffff" }}>Descripción del Proyecto</h5>
            <p>{fullInfo || "Próximamente más detalles..."}</p>
          </div>
  <div style={{ marginTop: "30px", textAlign: "center" }}>
  <div style={{ 
    display: "flex", 
    flexWrap: "wrap", 
    gap: "30px", 
    justifyContent: "center", 
    alignItems: "flex-start" 
  }}>
    {technologies && technologies.map((skill, index) => (
      <div key={index} style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "80px" 
      }}>
        <img 
          src={skill.img} 
          alt={skill.title} 
          style={{ width: "45px", height: "45px", objectFit: "contain", marginBottom: "8px" }} 
        />
        <h6 style={{ fontSize: "12px", color: "#E1F7F5", margin: 0 }}>{skill.title}</h6>
      </div>
    ))}
  </div>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
};