import { connect } from "react-redux";

import RequirementList from "../Components/LeftPanel/Requirements/RequirementList";

const mapStateToProps = (state: any) => ({
    Requirements: state.Requirements    
});

export default connect(mapStateToProps)(RequirementList);