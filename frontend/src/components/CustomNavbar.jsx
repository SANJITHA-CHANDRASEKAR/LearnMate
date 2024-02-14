import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import PageIcon from '@rsuite/icons/Page';
import OffRoundIcon from '@rsuite/icons/OffRound';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar style={{ color: "black" }}>
      <Nav>
        <Nav.Item icon={<PageIcon />} className="brand">LearnMate</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<HomeIcon />} className="nav-item-spacing">
          <Link to={`/home`} className="navbar-link">Home</Link>
        </Nav.Item>
        <Nav.Item icon={<InfoRoundIcon />} className="nav-item-spacing">
          <Link to={`/about`} className="navbar-link">About</Link>
        </Nav.Item>
        <Nav.Item icon={<PhoneFillIcon />} className="nav-item-spacing">
          <Link to={`/contact`} className="navbar-link">Contact</Link>
        </Nav.Item>
        <Nav.Item icon={<OffRoundIcon />} className="nav-item-spacing">
          <Link to={`/`} className="navbar-link">Logout</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
