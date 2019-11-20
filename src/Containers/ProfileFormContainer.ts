import { connect } from "react-redux";

import ProfileForm from "../Components/RightPanel/Profile/ProfileForm";

import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { UpdateProfile } from "../Actions/ProfileActions";

import ProfileApi from "../Api/ProfileApi";

const mapStateToProps = (state: any) => ({
    Indexes: state.Profile,
    Id: state.Requirement,
    LoadProfile: state.Loader.Profile
});

const mapDispatchToProps = (dispatch: any) => ({
    UpdateProfile: (changeValue: IChangeValue) => dispatch(UpdateProfile(changeValue)),
    SubmitUpdateProfile: (id: number, profile: string) => dispatch(ProfileApi.UpdateProfile(id, profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);