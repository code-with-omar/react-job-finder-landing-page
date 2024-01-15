import { Container } from "react-bootstrap";
import "./SubmitBetterJobs.css"
import Img from "../../assets/image.png"
const SubmitBetterJobs = () => {
    return (
        <section>
            <Container className="submit-better-jobs-wrap">
                <div className="submit-title">
                    <h4 className="fw-600 dark-00">Submit Better job <br/> applications</h4>
                </div>
                <h2 className="fw-600 dark-00">10x faster</h2>
                <p className="submit-details fw-400 dark-00 fs-16">AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                <img src={Img} alt="" className="img-fluid" />
            </Container>
        </section>
    );
};

export default SubmitBetterJobs;