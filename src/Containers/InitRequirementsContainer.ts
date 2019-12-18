import { connect } from "react-redux";

import InitRequirements from "../Components/LeftPanel/InitRequirements";

import ProjectApi from "../Api/ProjectApi";

const mapDispatchToProps = (dispatch: any) => ({
    InitRequirements: (id: number) => dispatch(ProjectApi.GetProject(id))
})

export default connect(null, mapDispatchToProps)(InitRequirements);