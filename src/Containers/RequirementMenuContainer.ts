import { connect } from "react-redux";

import RequirementMenu from "../Components/LeftPanel/Requirements/RequirementMenu";

import IMenu from "../Interfaces/IMenu";

import { ShowMenu } from "../Actions/MenuActions";

const mapDispatchToProps = (dispatch: any) => ({
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(RequirementMenu);