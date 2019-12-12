import { connect } from "react-redux";

import ComponentPanel from "../Components/ControlPanel/ControlPanel";

import IMenu from "../Interfaces/IMenu";

import { ShowMenu } from "../Actions/MenuActions";

const mapDispatchToProps = (dispatch: any) => ({
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
})

export default connect(null, mapDispatchToProps)(ComponentPanel);