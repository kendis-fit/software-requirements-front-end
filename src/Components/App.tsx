import React from "react";
import { connect } from "react-redux";

import Home from "./Pages/Home";
import ListProjects from "./Pages/ListProject";
import AlertListContainer from "../Containers/AlertListContainer";

import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";
import IDisplayMenu from "../Interfaces/IDisplayMenu";

import { ShowMenu } from "../Actions/MenuActions";

import "../root.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = ({ ShowMenu }: IDisplayMenu) => {
	return (
		<div onClick={(e: any) => {
				if (!e.target.dataset.close)
					ShowMenu({ Name: EMenu.NONE })
			} }>
			<BrowserRouter>
				<Switch>
					<Route exact={true} path="/" component={Home} />
					<Route exact={true} path="/projects" component={ListProjects} />
				</Switch>
			</BrowserRouter>
			<AlertListContainer />
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(App);