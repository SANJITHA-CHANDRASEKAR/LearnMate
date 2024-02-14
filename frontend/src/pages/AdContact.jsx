import "../assets/css/home.css"
import AdminNav from "../components/AdminNav";

const Contact = () => {
  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Type your message here..." required />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Visit Us</h2>
          <p>123 LearnMate Street</p>
          <p>Cityville, State</p>

          <h2>Email Us</h2>
          <p>info@learnmate.com</p>

          <h2>Call Us</h2>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
