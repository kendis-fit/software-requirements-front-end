import { connect } from "react-redux";

import CreateRequirement from "../Components/PopUpWindows/CreateRequirement";

import IRootState from "../Interfaces/IRootState";

import ProjectApi from "../Api/ProjectApi";
import RequirementApi from "../Api/RequirementApi";

const mapStateToProps = (state: IRootState) => ({
    ParentId: state.Requirement !== null ? state.Requirement.Id : null
});

const mapDispatchToProps = (dispatch: any) => ({
    CreateRequirement: (name: string, parentId: number | null) => {
        parentId !== null ? // if parentId null, then it creates project, otherwise requirement
        dispatch(RequirementApi.CreateRequirement(name, parentId)) : dispatch(ProjectApi.CreateProject(name))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequirement);