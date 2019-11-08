import React from "react";
import { connect } from "react-redux";

import { FlexBlock } from "./Styles/Block";
import ControlPanel from "./ControlPanel/ControlPanel";
import LeftPanel from "./LeftPanel/LeftPanel";

import { ShowMenu } from "../Actions/MenuActions";

import "../root.css";
import EMenu from "../Enumerations/EMenu";

interface IApp
{
	ShowMenu: (e: any) => void;
}

const App = ({ ShowMenu }: IApp) => {
	return (
		<div onClick={(e: any) => { ShowMenu(e) } }>
			<ControlPanel></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
			</FlexBlock>
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: (e: any) => {
		if (!e.target.dataset.menu && !e.target.parentNode.dataset.menu) dispatch(ShowMenu(EMenu.NONE))
	}
});

export default connect(null, mapDispatchToProps)(App);