import { connect } from "react-redux";

import ProfileForm from "../Components/RightPanel/Profile/ProfileForm";

const mapStateToProps = (state: any) => {
    return {
        Indexes: state.Profile,
        Id: state.Requirement
    }
};

export default connect(mapStateToProps)(ProfileForm);