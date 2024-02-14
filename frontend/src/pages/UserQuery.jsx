import { Button, Form, Message, useToaster } from "rsuite";
import { useState } from "react";
import CustomNavbar from "../components/customNavbar";
import instance from "../services/axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/userquery.css";

const UserQuery = () => {
  const navigate = useNavigate();
  const toaster = useToaster();
  const [formData, setFormData] = useState({
    userId: "",
    courseId: "",
    enquiry: "",
    email: ""
  });

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    instance.post(`http://localhost:8181/api/v1/user/addenquiry`, formData)
    .then(response => {
      toaster.push(
        <Message showIcon type="success" closable>
          Your query has been submitted!
        </Message>,
        { duration: 5000 }
      );
      navigate(`/home`);
    })
    .catch(error => {
      console.error('Error adding course:', error);
    });
  }

  return (
    <div className="bw-back">
      <header>
        <CustomNavbar />
      </header>
      <div className="bw-login"> {/* Updated class name */}
        <h4>Query</h4>
        <br />
        <Form layout="vertical">
          <Form.Group controlId="course">
            <Form.ControlLabel>Course Id</Form.ControlLabel>
            <Form.Control
              placeholder="Course"
              name="course"
              onChange={(value) => handleChange(value, "courseId")}
            />
          </Form.Group>

          <Form.Group controlId="userId">
            <Form.ControlLabel>User Id</Form.ControlLabel>
            <Form.Control
              placeholder="User Id"
              name="userId"
              onChange={(value) => handleChange(value, "userId")}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              placeholder="Email"
              name="email"
              onChange={(value) => handleChange(value, "email")}
            />
          </Form.Group>

          <Form.Group controlId="query">
            <Form.ControlLabel>Query</Form.ControlLabel>
            <Form.Control
              placeholder="Your Query"
              name="query"
              type="text"
              autoComplete="off"
              onChange={(value) => handleChange(value, "enquiry")}
            />
          </Form.Group>

          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default UserQuery;
