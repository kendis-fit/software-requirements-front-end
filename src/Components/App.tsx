import React from "react";

import { FlexBlock } from "./Styles/Block";
import ControlPanel from "./ControlPanel/ControlPanel";
import LeftPanel from "./LeftPanel/LeftPanel";

import "../root.css";

import MenuItems from "../Constants/MenuItems";

const App = () => {
	return (
		<div>
			<ControlPanel Menu={MenuItems}></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
			</FlexBlock>
		</div>
	);
}

export default App;