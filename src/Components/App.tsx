import React from "react";
import { connect } from "react-redux";

import OverMenu from "./OverMenu";
import LeftPanel from "./LeftPanel/LeftPanel";
import { FlexBlock } from "./Styles/Block";
import ControlPanel from "./ControlPanel/ControlPanel";

import { ShowMenu } from "../Actions/MenuActions";

import "../root.css";
import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";
import IMenuInteractive from "../Interfaces/IMenuInteractive";

const App = ({ Menu, ShowMenu }: IMenuInteractive) => {
	return (
		<div onClick={(e: any) => {
				if (!e.target.dataset.close)
					ShowMenu({ Name: EMenu.NONE })
			} }>
			<ControlPanel ShowMenu={ShowMenu}></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
			</FlexBlock>
			<OverMenu Menu={Menu} ShowMenu={ShowMenu}></OverMenu>
		</div>
	);
}

const mapStateToProps = (state: any) => ({
	Menu: state.Menu
});

const mapDispatchToProps = (dispatch: any) => ({
	ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);