import { connect } from "react-redux";

import RequirementList from "../Components/LeftPanel/Requirements/RequirementList";

import IRootState from "../Interfaces/IRootState";

import { SearchRequirement } from "../Utils/RequirementAlgorithms";

const mapStateToProps = (state: IRootState) => ({
    Requirements: state.SearchRequirement.length > 0 ? SearchRequirement(state.Requirements, state.SearchRequirement) : state.Requirements,
    LoadRequirements: state.Loader.Requirements,
    Id: state.Requirement ? state.Requirement.Id : null
});

export default connect(mapStateToProps)(RequirementList);