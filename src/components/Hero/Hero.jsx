import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { CiFileOn, CiMaximize2 } from "react-icons/ci";
import { IoRadio } from "react-icons/io5";
import "./Hero.css"
const Hero = () => {
    return (
        <Container className="hero-wrap">
            <div className="hero-title">
                <h2 className="fw-600 green-01">Win your dream job</h2>
                <h2 className="fw-600 white mb-3">with PostJob</h2>
            </div>
            <div className="hero-details">

                <p className="fw-400 fs-16 dark-01 ">Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
            </div>
            <Form className="hero-form d-flex">
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="btn-submit">
                    <input type="submit" value="Get Started" className="btn-getStarted bg-green-01 dark-00 " />
                </div>
            </Form>
            <Row xs={1} md={2} lg={3} className="g-4 hero-cards">
                <Col>
                    <Card className="hero-card h-100">
                        <Card.Body>
                            <CiFileOn className="green-01 card-image"/>
                            <Card.Title className="white fs-16 fw-600 mb-3">AI Cover Letter Generator</Card.Title>
                            <Card.Text className="fs-16 fw-400 dark-01">
                            The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="hero-card h-100">
                        <Card.Body>
                            <CiMaximize2 className="green-01 card-image"/>
                            <Card.Title className="white fs-16 fw-600 mb-3">Smart Personalization</Card.Title>
                            <Card.Text className="fs-16 fw-400 dark-01">
                            Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="hero-card h-100">
                        <Card.Body>
                            <IoRadio className="green-01 card-image"/>
                            <Card.Title className="white fs-16 fw-600 mb-3">Resume Scanner</Card.Title>
                            <Card.Text className="fs-16 fw-400 dark-01">
                            A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>


        </Container>
    );
};

export default Hero;