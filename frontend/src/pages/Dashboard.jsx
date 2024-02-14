import { Panel, Progress } from "rsuite";
import "../assets/css/dashboard.css";
import CustomSidebar from "../components/CustomSidebar";
import AdminNav from "../components/AdminNav";

const Dashboard = () => {
  const usersEnrolled = 150; // Replace with actual number
  const coursesEnrolled = 20; // Replace with actual number
  const coursesInProgress =   8; // Replace with actual number

  return (
    <div>
      <header>
        <AdminNav/>
      </header>
      <div className="admin-side">
        <CustomSidebar />
        <div className="admin-dashboard">
          <h1>Admin Dashboard</h1>

          <div className="info-section">
            <div className="info">
              <h4>Users Enrolled</h4>
              <p>{usersEnrolled}</p>
            </div>

            <div className="info">
              <h4>Courses Enrolled</h4>
              <p>{coursesEnrolled}</p>
            </div>

            <div className="info">
              <h4>Courses in Progress</h4>
              <p>{coursesInProgress}</p>
            </div>
          </div>

          <div className="progress-section">
            <Panel shaded bordered bodyFill className="panel-container">
              <h3>Course 1</h3>
              <Progress.Circle style={{ padding: 20 }} percent={70} strokeColor="#28a745" />
            </Panel>

            <Panel shaded bordered bodyFill className="panel-container">
              <h3>Course 2</h3>
              <Progress.Circle style={{ padding: 20 }} percent={50} strokeColor="#007bff" />
            </Panel>

            <Panel shaded bordered bodyFill className="panel-container">
              <h3>Course 3</h3>
              <Progress.Circle style={{ padding: 20 }} percent={70} strokeColor="#ffc107" />
            </Panel>

            {/* Add more Progress panels as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
