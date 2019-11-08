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
	ShowMenu(): void
}

const App = ({ ShowMenu }: IApp) => {
	return (
		<div onClick={(): void => ShowMenu()}>
			<ControlPanel></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
			</FlexBlock>
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: () => dispatch(ShowMenu(EMenu.NONE))
});

export default connect(null, mapDispatchToProps)(App);