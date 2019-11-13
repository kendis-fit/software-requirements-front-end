import { connect } from "react-redux";

import RequirementItem from "../Components/LeftPanel/Requirements/RequirementItem";

import ProfileApi from "../Api/ProfileApi";

const mapDispatchToProps = (dispatch: any) => ({
    SetProfile: (id: number) => dispatch(ProfileApi.GetProfile(id))
});

export default connect(null, mapDispatchToProps)(RequirementItem);
