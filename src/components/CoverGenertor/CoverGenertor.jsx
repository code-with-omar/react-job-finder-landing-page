import { Container } from "react-bootstrap";
import "./CoverGenertor.css"
import PartTop from "./PartTop/PartTop";
import PartBottom from "./PartBottom/PartBottom";
const CoverGenertor = () => {
    return (
        <section className="bg-green-01 cover-generator-wrap">
            <Container>
                <div className="cover-generator-top">
                    <PartTop></PartTop>
                </div>
                <div className="cover-generator-bottom">
                    <PartBottom></PartBottom>
                </div>
            </Container>
        </section>
    );
};

export default CoverGenertor;