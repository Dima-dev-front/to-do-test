import SplitPane, { Pane } from "react-split-pane";
import "./Layout.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import SectionTasks from "./components/SectionTasks/SectionTasks";
import {LAYOUT} from "./constants/constants-layout";

const App = () => (
  <div className="layout">
    <SplitPane {...LAYOUT}>
      <Pane>
        <Sidebar/>
      </Pane>
      <Pane>
        <SectionTasks/>
      </Pane>
    </SplitPane>
  </div>
);

export default App;
