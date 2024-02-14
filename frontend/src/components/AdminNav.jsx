import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import PageIcon from '@rsuite/icons/Page';
import OffRoundIcon from '@rsuite/icons/OffRound';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
const AdminNav = () => {
  return (
    <Navbar>
      <Nav>
        <Nav.Item icon={<PageIcon />} className="brand">LearnMate</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<HomeIcon />} className="nav-item-spacing">
          <Link to={`/dash`}>Dashboard</Link>
        </Nav.Item>
        <Nav.Item icon={<InfoRoundIcon />} className="nav-item-spacing">
          <Link to={`/adabout`}>About</Link>
        </Nav.Item>
        <Nav.Item icon={<PhoneFillIcon />} className="nav-item-spacing">
          <Link to={`/adcontact`}>Contact</Link>
        </Nav.Item>
        <Nav.Item icon={<OffRoundIcon />} className="nav-item-spacing">
          <Link to={`/`}>Logout</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default AdminNav;
