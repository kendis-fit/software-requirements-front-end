import { connect } from "react-redux";

import RequirementItem from "../Components/LeftPanel/Requirements/RequirementItem";

import ProfileApi from "../Api/ProfileApi";
import IMenu from "../Interfaces/IMenu";
import { ShowMenu } from "../Actions/MenuActions";

const mapDispatchToProps = (dispatch: any) => ({
    SetProfile: (id: number) => dispatch(ProfileApi.GetProfile(id)),
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(RequirementItem);
