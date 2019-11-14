import { connect } from "react-redux";

import ProfileForm from "../Components/RightPanel/Profile/ProfileForm";

const mapStateToProps = (state: any) => ({
    Indexes: state.Profile
});

export default connect(mapStateToProps)(ProfileForm);