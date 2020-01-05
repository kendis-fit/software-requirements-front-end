import { connect } from "react-redux";

import ConfirmDeleteRequirement from "../Components/PopUpWindows/ConfirmDeleteRequirement";

import IRootState from "../Interfaces/IRootState";

import RequirementAPi from "../Api/RequirementApi";

const mapStateToProps = (state: IRootState) => ({
    Id: state.Requirement.Id
})

const mapDispatchToProps = (dispatch: any) => ({
    RemoveRequirement: (id: number) => dispatch(RequirementAPi.RemoveRequirement(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteRequirement);