import { Link } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out!</p>
    <div className="navigation-buttons">
      <Link to="/">
        <button className="nav-btn">Go to Home</button>
      </Link>
      <Link to="/products">
        <button className="nav-btn">Go to Products</button>
      </Link>
    </div>
  </div>
);

export default Contact;
