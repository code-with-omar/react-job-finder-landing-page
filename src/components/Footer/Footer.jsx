import { Container } from "react-bootstrap";
import "./Footer.css"
import FooterTop from "./FooterTop/FooterTop";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterButtom from "./FooterButtom/FooterButtom";

const Footer = () => {
    return (
        <footer className="footer-wrap bg-green-01">
            <Container>
                <div className="footer-top">
                    <FooterTop></FooterTop>
                </div>
                <div className="footer-middle">
                    <FooterMiddle></FooterMiddle>
                </div>
                <div className="footer-buttom">
                    <FooterButtom></FooterButtom>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;