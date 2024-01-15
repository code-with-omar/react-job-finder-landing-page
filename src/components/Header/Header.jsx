import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Logo.svg"
import "./Header.css"
const Header = () => {
    return (
        <Navbar expand="lg" className="header">
            <Container>
                <div className="d-flex">
                    <img className="img-fluid" src={logo} alt="" />
                    <Nav.Link className="ms-3 white" href="#">PostJob</Nav.Link>

                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link className="ms-3 dark-01" href="#al">AI Cover Letter Generator</Nav.Link>
                        <Nav.Link className="ms-3 dark-01" href="#resume">Resume Template</Nav.Link>
                        <Nav.Link className="ms-3 dark-01" href="#pricing">Pricing</Nav.Link>
                        <div className="ms-auto">
                            <Button className="me-3 btn-signIn bg-dark-00">Sign In</Button>
                            <Button className="btn-getStarted bg-green-01 dark-00">Get Started</Button>
                        </div>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;