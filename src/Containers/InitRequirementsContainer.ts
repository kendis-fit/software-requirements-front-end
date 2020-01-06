import { connect } from "react-redux";

import InitRequirements from "../Components/LeftPanel/InitRequirements";

import ProjectApi from "../Api/ProjectApi";

const mapDispatchToProps = (dispatch: any) => ({
    InitRequirements: (projectsId: number[]) => {
        for (const id of projectsId)
        {
            dispatch(ProjectApi.GetProject(id));
        }
    }
})

export default connect(null, mapDispatchToProps)(InitRequirements);