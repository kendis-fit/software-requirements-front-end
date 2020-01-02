import { connect } from "react-redux";

import RequirementItem from "../Components/LeftPanel/Requirements/RequirementItem";

import IMenu from "../Interfaces/IMenu";
import IRequirementSelect from "../Interfaces/IRequirementSelect";

import ProfileApi from "../Api/ProfileApi";

import { ShowMenu } from "../Actions/MenuActions";
import { SetRequirement } from "../Actions/RequirementActions";

const mapDispatchToProps = (dispatch: any) => ({
    SetRequirement: (requirement: IRequirementSelect) => dispatch(SetRequirement(requirement)),
    SetProfile: (id: number) => dispatch(ProfileApi.GetProfile(id)),
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(RequirementItem);
