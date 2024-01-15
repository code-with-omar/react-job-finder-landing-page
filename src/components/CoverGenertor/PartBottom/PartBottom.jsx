import { Button, Card, Col, Row } from "react-bootstrap";
import VectorImage from "../../../assets/vector-2.png"
import "./PartBottom.css"
const PartBottom = () => {
    return (
        <Row xs={1} md={2} lg={2} className="g-5 part-top-wrap">
            <Col>
                <Card className="bg-green-01 part-top-card">
                    <Card.Body>
                        <img src={VectorImage} className="img-fluid" alt="" />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="bg-green-01 part-top-card">
                    <Card.Body>

                        <Card.Title className="dark-00 fw-600 mb-3 part-top-title">Optimize the keywords in your resume</Card.Title>
                        <Card.Text className="fs-16 fw-400 dark-00 part-top-details">By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.
                        </Card.Text>
                        <Button className="me-3 btn-cover-generator dark-00 bg-green-01">Optimize your Resume</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default PartBottom;