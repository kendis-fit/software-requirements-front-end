import { connect } from "react-redux";

import RequirementList from "../Components/LeftPanel/Requirements/RequirementList";

import { SearchRequirement } from "../Utils/RequirementAlgorithms";

const mapStateToProps = (state: any) => ({
    Requirements: state.SearchRequirement.length > 0 ? SearchRequirement(state.Requirements, state.SearchRequirement) : state.Requirements,
    LoadRequirements: state.Loader.Requirements
});

export default connect(mapStateToProps)(RequirementList);