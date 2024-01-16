import { Button } from "react-bootstrap";
import "./FooterTop.css"
const FooterTop = () => {
    return (
        <div className="footer-top-wrap">
            <h2 className="fw-600">What is next</h2>
            <p className="fw-400 mb-3">Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
            <Button className="me-3 btn-cover-generator dark-00 bg-green-01">Try For Free</Button>
        </div>
    );
};

export default FooterTop;