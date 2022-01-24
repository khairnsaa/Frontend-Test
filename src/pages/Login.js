import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
    return ( 
        <>
        <Header path="register" text="Register" />
        <Container>
            <h1 className="text-center mt-5">Login Page</h1>
            <Form className="regis-login-form w-25 mx-auto mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to='/news'>
                    <Button variant="primary" type="submit" className="w-100">Login</Button>
                </Link>
            </Form>
        </Container>
        </>
    );
}
 
export default Login;