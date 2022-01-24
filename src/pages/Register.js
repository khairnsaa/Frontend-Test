import { Button, Container, Form, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { useNavigate } from 'react-router';
import Footer from '../components/Footer'
import Header from "../components/Header";

const Register = () => {
    const navigate = useNavigate();

    const [gender, setGender] = useState('Male');
    const [validated, setValidated] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const provinces = {
        Jakarta: ['Jakarta Utara', 'Jakarta Timur', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarata Pusat'],
        Banten: ['Kota Tangerang', 'Kota Serang', 'Kota Tangerang Selatan', 'Kabupaten Tangerang', 'Kabupaten Lebak']
    }
    const provinceList = Object.keys(provinces).map(key => ({
        name: key
    }));


    function handleProvinceSelect(e) {
        console.log("Selected country", e.target.value);
        const countrySel = e.target.value;
        const citiesSel = countrySel !== "" ? provinces[countrySel] : [];
        setSelectedProvince(countrySel);
        setCities(citiesSel);
        setSelectedCity("");
    }
    
    function handleCitySelect(e) {
        console.log("Selected city", e.target.value);
        const citiesSel = e.target.value;
        setSelectedCity(citiesSel);
    }

    const handleValidate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert('thank you for registering')
            navigate('/login')
        }
        setValidated(true);
        
    };
    return ( 
        <>
            <Header path="login" text="Login" />
            <Container className="mt-3">
                <h1 className="text-center">Account Registration Page</h1>
                <Form noValidate validated={validated} onSubmit={handleValidate} className="regis-login-form w-50 mx-auto my-5">
                    <Row className="mb-3">
                        <Col md={12} lg={6}>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    required
                                    type="text" 
                                    placeholder="First Name" 
                                />
                                <Form.Control.Feedback type='invalid'>First Name Cannot Be Blank</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12} lg={6}>
                            <Form.Group className="mb-3" controlId="validationCustom02">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    required
                                    type="text" 
                                    placeholder="Last Name" 
                                />
                                <Form.Control.Feedback type='invalid'>Last Name Cannot Be Blank</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationCustomEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Incorrect Email</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                        <Form.Group as={Col} controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password Cannot Be Blank.</Form.Control.Feedback>
                        </Form.Group>
                    <Row className="mb-3">
                    </Row>
                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Row>
                            <Col>
                                <Form.Check type="radio" label="Male" checked={gender === 'Male'} value="Male" onChange={() => setGender('Male')} />
                            </Col>
                            <Col>
                                <Form.Check type="radio" label="female" checked={gender === 'Female'} value="Female" onChange={() => setGender('Female')} />                            
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col md={12} lg={6}>
                                <Form.Label htmlFor="province">Province</Form.Label>
                                <Form.Select name="Province" id="province" onChange={(e) => handleProvinceSelect(e)} value={selectedProvince}>
                                    <option value="">Select the province</option>
                                    {provinceList.map((province, key) => (
                                        <option key={key} value={province.name}>
                                        {province.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col md={12} lg={6}>
                                <Form.Label htmlFor="city">City</Form.Label>
                                <Form.Select id="city" onChange={(e) => handleCitySelect(e)} value={selectedCity}>
                                <option value="">Select the city</option>
                                {cities.map((city, key) => (
                                    <option key={key} value={city}>
                                    {city}
                                    </option>
                                ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button type="submit" className="w-100">Register</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}
 
export default Register;