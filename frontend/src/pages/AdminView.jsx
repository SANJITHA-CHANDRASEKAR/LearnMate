import { Button, Input, InputGroup, Panel, PanelGroup, Placeholder } from "rsuite";
import "../assets/css/addcourse.css";
import SearchIcon from '@rsuite/icons/Search';
import AdminNav from "../components/AdminNav";
import { courseList } from "../services/user";
import { useEffect, useState } from "react";
import instance from '../services/axios'; // Import instance from axios for API requests
import { Link } from 'react-router-dom';
import CustomSidebar from "../components/CustomSidebar";

const AdminView = () =>{
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = () => {
        courseList()
            .then(response => {
                setCourses(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    };

    const handleSearchInputChange = (value) => {
        setSearchQuery(value);
    };

    const handleDeleteCourse = (courseId) => {
        instance.delete(`http://localhost:8181/api/v1/user/deleteCourse/${courseId}`)
        .then(response => {
            console.log("Course deleted successfully");
            fetchCourses(); // Refetch courses after successful deletion
        })
        .catch(error => {
            console.error('Error deleting course:', error);
        });
    };

    const filteredCourses = courses.filter(course =>
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <header>
                <AdminNav />
            </header>
            <div style={{ display: 'flex', flex: 1 }}>
                {/* Sidebar */}
                <div style={{ width: '250px', flexShrink: 0 }}>
                    <CustomSidebar style={{height: '100%'}} />
                </div>
                <div style={{ flex: '1' }}>
                    <div className="search">
                        <InputGroup inside style={{ borderWidth:"1px", borderColor:"black"}}>
                            <SearchIcon style={{ margin: 10 }} />
                            <Input
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                            />
                        </InputGroup>
                    </div>
                    <div className="courselist">
                        <PanelGroup style={{borderWidth:'1px', borderColor:"black",color:"black"}} accordion bordered>
                            {filteredCourses.map(course =>  (
                                <Panel  key={course.courseId} header={course.courseName} defaultExpanded>
                                    <p>Description: {course.description}</p>
                                    <p>Duration: {course.duration} </p>
                                    <p>Fee: {course.fee}</p>
                                    <Button style={{ marginLeft: '90%' }} className="delete-button" onClick={() => handleDeleteCourse(course.courseId)}>Delete</Button>
                                </Panel>
                            ))}
                            {filteredCourses.length === 0 && (
                                <Panel header="No courses found">
                                    <Placeholder.Paragraph />
                                </Panel>
                            )}
                        </PanelGroup>
                    </div>
                </div>
            </div>
            {/* Button with + symbol at the bottom right corner */}
            <Link to={`/addcourse`}>
                <Button className="add-button"
                    style={{
                        position: 'fixed',
                        bottom: 40,
                        right: 40,
                        borderRadius:"70px",
                        height:"70px",
                        width:"70px",
                        paddingBottom:"15px",
                        zIndex: 999 // Ensure the button is above other elements
                    }}
                >
                    <h1>+</h1>
                </Button>
            </Link>
        </div>
    );
};

export default AdminView;
