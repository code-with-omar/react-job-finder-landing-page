
import FileImage from "../../assets/file.png";
import MailImage from "../../assets/mail.png";
import Gitpull from "../../assets/git-pull-request.png";
import Send from "../../assets/send.png";
import Grid from "../../assets/grid.png"
import CodeSpan from "../../assets/codesandbox.png"
import "./CoverLetter.css"
import { Button, Container, Row } from "react-bootstrap";
import CoverLetterCard from "../CoverLetterCard/CoverLetterCard";
const CoverLetter = () => {
    const lettersData = [
        { id: 1, img: FileImage, title: "Cover Letter", details: "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer." },
        { id: 2, img: MailImage, title: "Resignation Letters", details: "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company." },
        { id: 1, img: Gitpull, title: "Connection Request", details: "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user." },
        { id: 1, img: Send, title: "Outreach Emails", details: "Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration." },
        { id: 1, img: Grid, title: "Resume Optimization", details: "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users." },
        { id: 1, img: CodeSpan, title: "Resume Design", details: "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes." },
    ]
    return (
        <section className="cover-letter-wrap">
            <Container>
                <div className="cover-letter-top">
                    <h2 className="fw-600 white mb-3">Spend less time looking for work</h2>
                    <p className="fs-16 fw-400 dark-01">We will help you through the hardest part of your job search.</p>
                    <Button className="me-3 btn-signIn bg-dark-00">Create an Account</Button>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 hero-cards">
                    {lettersData.map(data => <CoverLetterCard key={data.id} data={data}></CoverLetterCard>)}
                </Row>
            </Container>
        </section>
    );
};

export default CoverLetter;