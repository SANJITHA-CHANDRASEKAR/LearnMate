import { useState } from "react";
import { Button, Form, Message, SelectPicker, useToaster } from "rsuite";
import { useNavigate } from "react-router-dom";
import PageIcon from '@rsuite/icons/Page';
import imag from "../assets/images/student-with-computer-RDCJG5.jpg";
import { signUp } from "../services/auth";

const roles = ['Admin', 'User'].map(
  role => ({ label: role, value: role })
);

const Signup = () => {
  const toaster = useToaster();
  const navigate = useNavigate(); // Access the navigation function
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  });
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    signUp(formData)
      .then(() => {        
        toaster.push( 
        <Message showIcon type='success' closable onClose={navigate('/')}>
        Registration successful!
          </Message>, {
            placement:'topCenter',
          duration: 1000
        });
       

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>  
      <h1 style={{margin:20, color:"black"}}><PageIcon/>LearnMate</h1>
      <div style={{display:"flex"}}>
        <div>
          <img src={imag} 
            alt="LearnMate Logo" 
            style={{ width: "450px", height: "660px", marginTop: "20px", marginLeft: "90px" }} 
          />
        </div>
        <div style={{marginLeft:"150px",marginTop:"30px"}} className="login">
          <h4>Register</h4>
          <br/>
          <Form layout="vertical">
            <Form.Group controlId="username">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control placeholder="Username" name="username" value={formData.username} onChange={(value) => handleChange("username", value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control placeholder="Email" name="email" value={formData.email} onChange={(value) => handleChange("email", value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" value={formData.password} onChange={(value) => handleChange("password", value)} />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.ControlLabel controlId="role">Role</Form.ControlLabel>
              <SelectPicker
                data={roles}
                searchable={false}
                style={{ width: 300 }}
                placeholder="Role"
                name="role"
                value={formData.role}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.ControlLabel>Phone Number</Form.ControlLabel>
              <Form.Control placeholder="Phone Number" autoComplete="off" name="phoneNumber" type="number" value={formData.phoneNumber} onChange={(value) => handleChange("phoneNumber", value)} />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.ControlLabel>Address</Form.ControlLabel>
              <Form.Control placeholder="Address" name="address" autoComplete="off"  value={formData.address} onChange={(value) => handleChange("address", value)} />
            </Form.Group>
            <Form.Group>
              <Button className="login-button" onClick={handleSubmit}>Register</Button>
            </Form.Group>
          </Form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
