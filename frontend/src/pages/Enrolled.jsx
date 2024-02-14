import { Panel, Progress } from "rsuite";
import CustomNavbar from "../components/customNavbar";

const Enrolled = () => {
  return (
    <div className="enroll">
      <header>
        <CustomNavbar />
      </header>
      <h1 style={{ margin: 20, color:"black" }}>My Course</h1>
      <div className="panel-container">
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,height:350, margin: 20 }}>
          <div style={{ padding: 20 }}>
            <Progress.Circle percent={30} strokeColor="black" />
          </div>
          <Panel header="Natural Language Processing">
           
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,height:350, margin: 20 }}>
          <div style={{ padding: 20 }}>
            <Progress.Circle percent={50} strokeColor="black" />
          </div>
          <Panel header="Cloud Computing">
          </Panel>
        </Panel>
      </div>
    </div>
  );
};

export default Enrolled;
