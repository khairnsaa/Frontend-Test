import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ path, text}) => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Logo Here</Navbar.Brand>
                <Link to={`/${path}`}><Button>{text}</Button></Link>
            </Container>
        </Navbar>
    );
}
 
export default Header;