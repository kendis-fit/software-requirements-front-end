import { connect } from "react-redux";

import ProfileForm from "../Components/RightPanel/Profile/ProfileForm";

import IRootState from "../Interfaces/IRootState";
import EMenu from "../Constants/Enumerations/EMenu";
import IChangeValue from "../Interfaces/Profile/IChangeValue";

import { UpdateProfile } from "../Actions/ProfileActions";
import { SetIndex } from "../Actions/RequirementActions";
import { ShowMenu } from "../Actions/MenuActions";

import ProfileApi from "../Api/ProfileApi";

const mapStateToProps = (state: IRootState) => ({
    Indexes: state.Profile,
    Requirement: state.Requirement,
    LoadProfile: state.Loader.Profile
});

const mapDispatchToProps = (dispatch: any) => ({
    UpdateProfile: (changeValue: IChangeValue) => dispatch(UpdateProfile(changeValue)),
    SubmitUpdateProfile: (id: number, profile: string) => dispatch(ProfileApi.UpdateProfile(id, profile)),
    ShowResult: (id: string) => {
        console.log("index", id);
        dispatch(SetIndex(id));
        dispatch(ShowMenu({ Name: EMenu.SHOW_RESULT }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);