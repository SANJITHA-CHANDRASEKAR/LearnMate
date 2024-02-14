import CustomNavbar from "../components/customNavbar";
import "../assets/css/home.css"; 
import { Link } from "react-router-dom";
import PageIcon from '@rsuite/icons/Page';
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={{color:"black"}} className="container">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <section className="hero" >
          <h1>Welcome to   <PageIcon/>LearnMate</h1>
          <h5>Your one-stop solution for managing courses, student inquiries, and doubts.</h5>
        </section>
        <div>
          <div className="cardins">
            <div className="subins">
              <img src="https://media.istockphoto.com/id/1311107708/photo/focused-cute-stylish-african-american-female-student-with-afro-dreadlocks-studying-remotely.jpg?s=612x612&w=0&k=20&c=OwxBza5YzLWkE_2abTKqLLW4hwhmM2PW9BotzOMMS5w=" className="imgins"></img>
            </div>
            <div className="pins">
              <h2>Get Started With Us Today!!!</h2>
              <br></br>
              <p>LearnMate is an educational platform that offers a wide range of courses
                 covering various subjects such as yoga, programming, arts, and more. Our
                  platform provides comprehensive learning experiences, with expert
                   instructors guiding students through theoretical knowledge and practical skills.</p>
              <p>Join LearnMate today to enhance your skills, expand your knowledge, and embark
                 on a 
                journey of lifelong learning!</p>
              <br></br>
             
              <br></br><br></br>
            </div>
          </div>
        </div>
          
        <section className="card__wrapper">
          <Link to={`/viewcourse`} className="card-link">
            <div className="card">
              <h3>Explore New Courses</h3>
              <p>Discover exciting new courses that cover a wide range of subjects. Stay ahead in your field by enrolling in our latest offerings.</p>
              <p> Browse Courses</p>
            </div>
          </Link>
         
          <Link to={`/enrolled`} className="card-link">
            <div className="card">
              <h3>Your Course Journey</h3>
              <p>View all the courses you are currently enrolled in. Keep track of your progress, assignments, and upcoming lectures.</p>
              <p>View Your Courses</p>
            </div>
          </Link>
          
          <Link to={`/userquery`} className="card-link">
            <div className="card">
              <h3>Get Assistance</h3>
              <p>Have questions or need help? Our support team is here for you. View and respond to your inquiries and get the assistance you need.</p>
              <p>Contact Support</p>
            </div>
          </Link>
        </section>
        <div style={{marginTop:"50px"}}>
          <Footer  />
        </div>
      </main>
    </div>
  );
};

export default Home;
