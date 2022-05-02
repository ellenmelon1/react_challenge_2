import logo from '../Media/Logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <section className="header_container">
      <div>
        <img src={logo} alt="company logo" className="header_logo"></img>
      </div>
      <div className="header_links">
        <Link to="/">HOME</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/contact-us">CONTACT US</Link>
        <button>Log in</button>
      </div>
    </section>
  );
};

export default Header;
