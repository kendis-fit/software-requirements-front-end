import { connect } from "react-redux";

import ConfirmDeleteRequirement from "../Components/ConfirmDeleteRequirement";

import RequirementAPi from "../Api/RequirementApi";

const mapStateToProps = (state: any) => ({
    Id: state.Requirement
})

const mapDispatchToProps = (dispatch: any) => ({
    RemoveRequirement: (id: number) => dispatch(RequirementAPi.RemoveRequirement(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteRequirement);