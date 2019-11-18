import { connect } from "react-redux";

import RequirementItem from "../Components/LeftPanel/Requirements/RequirementItem";

import IMenu from "../Interfaces/IMenu";

import ProfileApi from "../Api/ProfileApi";

import { ShowMenu } from "../Actions/MenuActions";
import { SetRequirement } from "../Actions/RequirementActions";

const mapDispatchToProps = (dispatch: any) => ({
    SetRequirement: (id: number) => dispatch(SetRequirement(id)),
    SetProfile: (id: number) => dispatch(ProfileApi.GetProfile(id)),
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(RequirementItem);
