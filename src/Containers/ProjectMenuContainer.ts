import { connect } from "react-redux";

import ProjectMenu from "../Components/ControlPanel/ProjectMenu";

import IMenu from "../Interfaces/IMenu";

import { ShowMenu } from "../Actions/MenuActions";
import { SetRequirement } from "../Actions/RequirementActions";

const mapDispatchToProps = (dispatch: any) => ({
    SetRequirement: () => dispatch(SetRequirement(null)),
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(ProjectMenu);