import { connect } from "react-redux";

import ProfileForm from "../Components/RightPanel/Profile/ProfileForm";

import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { UpdateProfile } from "../Actions/ProfileActions";

const mapStateToProps = (state: any) => {
    return {
        Indexes: state.Profile,
        Id: state.Requirement
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    UpdateProfile: (changeValue: IChangeValue) => dispatch(UpdateProfile(changeValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);