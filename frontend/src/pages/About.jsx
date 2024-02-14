import CustomNavbar from '../components/CustomNavbar';
import "../assets/css/home.css";
const About = () => {
  return (
    <div className="about-page">
      <CustomNavbar />
      <div className="about-content">
        <h1>About LearnMate</h1>
        <p>
          LearnMate is a platform dedicated to providing high-quality educational resources and fostering a community of learners.
        </p>
        <p>
          Our mission is to make learning accessible, enjoyable, and effective for everyone. Whether you are a student, educator, or lifelong learner, LearnMate is here to support your educational journey.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li>Wide range of courses and learning materials</li>
          <li>Interactive and engaging learning experiences</li>
          <li>Community forums for discussions and collaboration</li>
          <li>Personalized learning paths and progress tracking</li>
        </ul>
        <h2>Get Started:</h2>
        <p>
          Join LearnMate today and embark on a journey of knowledge and discovery. Start exploring our courses and connect with a community of passionate learners.
        </p>
      </div>
    </div>
  );
};

export default About;
