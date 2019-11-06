import React from "react";

import { FlexBlock } from "./Styles/Block";
import ControlPanel from "./ControlPanel/ControlPanel";
import LeftPanel from "./LeftPanel/LeftPanel";

import "../root.css";

const App = () => {
  return (
    <div>
      <ControlPanel></ControlPanel>
      <FlexBlock>
        <LeftPanel></LeftPanel>
      </FlexBlock>
    </div>
  );
}

export default App;