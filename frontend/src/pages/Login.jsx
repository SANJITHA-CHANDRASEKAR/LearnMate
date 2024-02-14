import { useState } from "react";
import { Button, Form } from "rsuite";
import { Link, useNavigate } from "react-router-dom";
import PageIcon from '@rsuite/icons/Page';
import { signIn } from "../services/auth";
import "../assets/css/logins.css";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Access the navigation function

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = {
            email: email,
            password: password
        }
        signIn(form)
            .then((res) => {
                const decoded = jwtDecode(res.data.token);
                sessionStorage.setItem('token', res.data.token);
                console.log(decoded.sub);
                if(decoded.sub === "sanju@gmail.com"){
                    setEmail("");
                    setPassword("");
                    navigate('/dash');
                }
                else{
                    setEmail("");
                setPassword("");
                navigate('/home');
                }
                
            })
            .catch((err) => {
                setEmail("");
                setPassword("");
                console.log(err);
               
            });
    };

    return (
        <div>
            <h1 style={{ margin: 20, color:"black" }}><PageIcon />LearnMate</h1>
            <div style={{ display: "flex" }}>
                <div>
                    <img
                        src="https://img.freepik.com/free-vector/digital-learning-abstract-concept-vector-illustration-digital-distance-education-elearning-flipped-smart-classroom-training-courses-online-teaching-video-call-home-office-abstract-metaphor_335657-5860.jpg"
                        alt="LearnMate Logo"
                        style={{ width: "500px", height: "500px", marginTop: "-10px", marginLeft: "90px", borderRadius: "300px" }}
                    />
                </div>
                <div style={{ marginLeft: "100px", marginTop: "30px" }} className="login">
                    <h4>Log in</h4>
                    <br />
                    <Form layout="vertical" >
                        <Form.Group controlId="email">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email} />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password} />
                        </Form.Group>
                        <Form.Group>
                            <Button className="login-button" onClick={handleFormSubmit}>Login</Button>
                        </Form.Group>
                    </Form>
                    <br />
                    <p>New User? <Link to="/signup">Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
