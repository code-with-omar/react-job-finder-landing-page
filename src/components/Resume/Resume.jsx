import { Button, Card, Col, Container, Row } from "react-bootstrap";
import vector from "../../assets/vector.png"
import "./Resume.css"

const Resume = () => {
    return (
        <section className="resume-wrapper">
            <Container>
                <Row xs={1} md={2} lg={2} className="g-5 ">
                    <Col className="resume-left-cards">
                        <Card className="resume-left-card">
                            <Card.Title className="resume-left-card-title fw-600 white">
                                Free resume design templates
                            </Card.Title>
                            <Card.Body>
                                <p className="dark-01 fs-16 fw-400 my-3 mx-0">By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.</p>
                                <Button className="me-3 resume-btn">Optimize your Resume</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="resume-right">
                        <Card className="bg-dark-00">
                            <Card.Body>
                                <img src={vector} className="img-fluid" alt="" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Resume;