import '../assets/css/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@learnmate.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media:</p>
          <div className="social-icons">
          <div>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 LearnMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
