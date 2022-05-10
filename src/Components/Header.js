import logo from '../Media/Logo.svg';
import { Link } from 'react-router-dom';
import '../Styling/header.css';

const Header = () => {
  return (
    <nav className="header_container">
      <div className="logo_container">
        <Link to="/" className="header_logo_link">
          <img src={logo} alt="company logo" className="header_logo"></img>
        </Link>
      </div>
      <div className="header_links">
        <Link to="/" className="header_link header_home_link">
          HOME
        </Link>
        <Link to="/about-us" className="header_link">
          ABOUT US
        </Link>
        <Link to="/contact-us" className="header_link">
          CONTACT US
        </Link>
        <button className="header_button">Log in</button>
      </div>
    </nav>
  );
};

export default Header;
