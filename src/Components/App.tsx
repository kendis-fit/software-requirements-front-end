import React from "react";
import { connect } from "react-redux";

import Home from "./Pages/Home";
import AlertListContainer from "../Containers/AlertListContainer";
import ControlPanelContainer from "../Containers/ControlPanelContainer";

import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";
import IDisplayMenu from "../Interfaces/IDisplayMenu";

import { ShowMenu } from "../Actions/MenuActions";

import "../root.css";

const App = ({ ShowMenu }: IDisplayMenu) => {
	return (
		<div onClick={(e: any) => {
				if (!e.target.dataset.close)
					ShowMenu({ Name: EMenu.NONE })
			} }>
			<ControlPanelContainer />
			<Home />
			<AlertListContainer />
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(App);