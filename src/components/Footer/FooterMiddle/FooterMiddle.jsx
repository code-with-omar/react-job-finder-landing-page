import { Card, Col, Nav, Row } from "react-bootstrap";
import "./FooterMiddle.css"

const FooterMiddle = () => {
    return (
        <Row xs={1} md={2} lg={4} className="g-5 footer-middle-wrap">
            <Col>
                <Card className="footer-middle-body bg-green-01">
                    <Card.Body >
                        <Card.Title className="footer-middle-title fw-400 fs-20">Platform</Card.Title>
                        <Nav className="flex-column">
                            <Nav.Link className="dark-00 my-2" href="">Plans and Prices</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">AI Create Letters</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">AI Resume Checker</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">Resume Templates</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">Sell Templates</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">Blog</Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="footer-middle-body bg-green-01">
                    <Card.Body >
                        <Card.Title className="footer-middle-title fw-400 fs-20">Features</Card.Title>
                        <Nav className="flex-column">
                            <Nav.Link className="dark-00 my-2" href="">AI Cover Letter Creator</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">Resume Keywords Optimizer</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">ATS Resume Checker</Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="footer-middle-body bg-green-01">
                    <Card.Body >
                        <Card.Title className="footer-middle-title fw-400 fs-20">Resources</Card.Title>
                        <Nav className="flex-column">
                            <Nav.Link className="dark-00 my-2" href="">4 AI Tools for Applying a Job</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">How to optimize Resume keywords</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">Why you should use Chat GPT for create Resume</Nav.Link>
                            <Nav.Link className="dark-00 my-2" href="">What should you include in a Cover Letter</Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="footer-middle-body bg-green-01">
                    <Card.Body >
                        <Card.Title className="footer-middle-title fw-400 fs-20">Support</Card.Title>
                        <p className="dark-00 fs-16 fw-400">support@gmail.com</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FooterMiddle;