import React from "react";
import { connect } from "react-redux";

import PopUpMenu from "./PopUpMenu";
import { FlexBlock } from "./Styles/Block";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import ControlPanel from "./ControlPanel/ControlPanel";

import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";
import IMenuInteractive from "../Interfaces/IMenuInteractive";

import "../root.css";

import { ShowMenu } from "../Actions/MenuActions";

const App = ({ Menu, ShowMenu }: IMenuInteractive) => {
	return (
		<div onClick={(e: any) => {
				if (!e.target.dataset.close)
					ShowMenu({ Name: EMenu.NONE })
			} }>
			<ControlPanel ShowMenu={ShowMenu}></ControlPanel>
			<FlexBlock>
				<LeftPanel></LeftPanel>
				<RightPanel></RightPanel>
			</FlexBlock>
			<PopUpMenu Menu={Menu} ShowMenu={ShowMenu} />
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