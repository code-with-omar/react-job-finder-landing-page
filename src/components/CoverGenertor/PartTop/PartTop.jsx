import { Button, Card, Col, Row } from "react-bootstrap"
import VectorImage from "../../../assets/vector-1.png"
import "./PartTop.css"
const PartTop = () => {
    return (
        <Row xs={1} md={2} lg={2} className="g-5 part-top-wrap">
            <Col>
                <Card className="bg-green-01 part-top-card">
                    <Card.Body>

                        <Card.Title className="dark-00 fw-600 mb-3 part-top-title">Free AI cover letter generator powered by GPT</Card.Title>
                        <Card.Text className="fs-16 fw-400 dark-00 part-top-details">A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters.
                        </Card.Text>
                        <Button className="me-3 btn-cover-generator dark-00 bg-green-01">Try For free Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-green-01 part-top-card">
                    <Card.Body>
                        <img src={VectorImage} className="img-fluid" alt="" />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default PartTop;