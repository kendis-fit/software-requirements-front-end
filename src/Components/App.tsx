import React from "react";
import { connect } from "react-redux";

import { FlexBlock } from "./Styles/Block";
import ControlPanel from "./ControlPanel/ControlPanel";
import LeftPanel from "./LeftPanel/LeftPanel";
import OverMenu from "./OverMenu";

import { ShowMenu } from "../Actions/MenuActions";

import "../root.css";
import EMenu from "../Enumerations/EMenu";
import IMenu from "../Interfaces/IMenu";

interface IApp
{
	Menu: IMenu;
	ShowMenu: (e: any) => void;
}

const App = ({ Menu, ShowMenu }: IApp) => {
	return (
		<div onClick={(e: any) => { ShowMenu(e) } }>
			<ControlPanel></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
			</FlexBlock>
			<OverMenu Menu={Menu}></OverMenu>
		</div>
	);
}

const mapStateToProps = (state: any) => ({
	Menu: state.Menu
});

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: (e: any) => {
		if (!e.target.dataset.menu && !e.target.parentNode.dataset.menu) dispatch(ShowMenu({ Name: EMenu.NONE }))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);