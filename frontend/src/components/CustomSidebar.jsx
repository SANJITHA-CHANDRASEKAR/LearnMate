import { Nav, Sidenav } from 'rsuite';
import BookIcon from '@rsuite/icons/legacy/Book';
import UserIcon from '@rsuite/icons/legacy/User';
import QuestionIcon from '@rsuite/icons/legacy/Question';
import DetailIcon from '@rsuite/icons/Detail';
import { Link } from 'react-router-dom';

const CustomSidebar = () => {
  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={['courses', 'queries']}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="profile" icon={<UserIcon />}>
              <Link to={`/getusers`}>Users</Link>
            </Nav.Item>
            <Nav.Item eventKey="courses" icon={<BookIcon />}>
              <Link to={`/adminview`}>Courses</Link>
            </Nav.Item>
            <Nav.Item eventKey="queries" icon={<QuestionIcon />}>
              <Link to={`/enquires`}>Queries</Link>
            </Nav.Item> 
            <Nav.Item eventKey="payments" icon={<DetailIcon />}>
              <Link to={`/payment`}>Payments</Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default CustomSidebar;
