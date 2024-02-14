import { Button, Form, Message, useToaster } from "rsuite";
import "../assets/css/addcourse.css";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
import PageIcon from '@rsuite/icons/Page';
import instance from '../services/axios'; // Import instance from axios for API requests
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
    // State variables to store form values
    const toaster = useToaster();
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [fee, setFee] = useState("");
    const [courseId, setCourseId] = useState("");
    const [image, setImage] = useState("");

    // Function to handle form submission
    const handleSubmit = () => {
        const formData = {
            courseId: courseId,
            courseName: courseName,
            description: description,
            duration: duration,
            fee: fee,
            image: image
        };

        instance.post(`http://localhost:8181/api/v1/user/addcourse`, formData)
            .then(response => {
                console.log("Course added successfully");
                // Reset form values after successful submission if needed

                toaster.push( 
                    <Message showIcon type='success' closable onClose={navigate(`/adminview`)}>
                        Course added successfully!!!
                      </Message>, {
                        placement:'topCenter',
                      duration: 1000
                    });
                setCourseName("");
                setDescription("");
                setDuration("");
                setFee("");
            })
            .catch(error => {
                console.error('Error adding course:', error);
            });
    };

    return(
        <div>
            <header>
                <AdminNav />
            </header>
            <h1 style={{ margin: 20, color:"black" }}><PageIcon />LearnMate</h1>
            <div className="course">
                <Form layout="vertical" >

                <Form.Group controlId="cid">
                    <h3 style={{marginLeft:70, marginBottom:10}}>Course Details</h3>
                        <Form.ControlLabel>Course Id</Form.ControlLabel>
                        <Form.Control 
                            autoComplete="off"
                            placeholder="Course Id" 
                            name="cid"
                            value={courseId}
                            onChange={value => setCourseId(value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="cname">
                        <Form.ControlLabel>Course Name</Form.ControlLabel>
                        <Form.Control 
                            autoComplete="off"
                            placeholder="Course Name" 
                            name="cname"
                            value={courseName}
                            onChange={value => setCourseName(value)}
                        />
                    </Form.Group>
            
                    <Form.Group controlId="description">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control 
                           
                            placeholder="Description" 
                            name="description" 
                            type="text" 
                            autoComplete="off" 
                            value={description}
                            onChange={value => setDescription(value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="duration">
                        <Form.ControlLabel>Duration</Form.ControlLabel>
                        <Form.Control 
                            placeholder="Duration" 
                            name="duration" 
                            type="text" 
                            autoComplete="off" 
                            value={duration}
                            onChange={value => setDuration(value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="fee">
                        <Form.ControlLabel>Fees Amount</Form.ControlLabel>
                        <Form.Control 
                            placeholder="Fee" 
                            name="fee" 
                            type="text" 
                            autoComplete="off" 
                            value={fee}
                            onChange={value => setFee(value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="fee">
                        <Form.ControlLabel>Image</Form.ControlLabel>
                        <Form.Control 
                            placeholder="Url" 
                            name="image" 
                            type="text" 
                            autoComplete="off" 
                            value={image}
                            onChange={value => setImage(value)}
                        />
                    </Form.Group>
            
                    <Button className="add" onClick={handleSubmit}>Add Course</Button>
                </Form>
            </div>
        </div>
    );
}

export default AddCourse;
