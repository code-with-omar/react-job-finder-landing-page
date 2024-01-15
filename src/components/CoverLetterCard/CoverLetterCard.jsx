import { Card, Col } from "react-bootstrap";
import "./CoverLetterCard.css"

const CoverLetterCard = ({ data }) => {
    const { img, title, details } = data;
    return (
        <Col>
            <Card className="hero-card h-100">
                <Card.Body>
                    <img src={img} alt="" />
                    <Card.Title className="white fs-16 fw-600 mb-3">{title}</Card.Title>
                    <Card.Text className="fs-16 fw-400 dark-01">
                       {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CoverLetterCard;