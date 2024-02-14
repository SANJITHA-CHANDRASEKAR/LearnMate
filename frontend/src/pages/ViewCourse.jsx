import { useEffect, useState } from "react";
import { Button, Input, InputGroup, Placeholder } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import CustomNavbar from "../components/customNavbar";
import { courseList } from "../services/user";
import "../assets/css/addcourse.css";

const ViewCourse = () => {
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

    const filteredCourses = courses.filter(course =>
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <header>
                <CustomNavbar />
            </header>
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
                <div className="course-container">
                    {filteredCourses.map(course => (
                        <div key={course.courseId} className="course-card">
                            <img src={course.image} className="course-image" alt="Course Thumbnail" />
                            <div className="card-content">
                                <h3>{course.courseName}</h3>
                                <p><strong>Description:</strong> {course.description}</p>
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p><strong>Fee:</strong> {course.fee}</p>
                            </div>
                            <Button className="enroll-button">Enroll</Button>
                        </div>
                    ))}
                    {filteredCourses.length === 0 && (
                        <div className="course-card">
                            <h3>No courses found</h3>
                            <Placeholder.Paragraph />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewCourse;
