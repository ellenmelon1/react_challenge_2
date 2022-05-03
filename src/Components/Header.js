import logo from '../Media/Logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <section className="header_container">
      <div>
        <Link to="/" className="header_logo_link">
          <img src={logo} alt="company logo" className="header_logo"></img>
        </Link>
      </div>
      <div className="header_links">
        <Link to="/" className="header_link">
          HOME
        </Link>
        <Link to="/about-us" className="header_link">
          ABOUT US
        </Link>
        <Link to="/contact-us" className="header_link">
          CONTACT US
        </Link>
        <button className="header_link">Log in</button>
      </div>
    </section>
  );
};

export default Header;
