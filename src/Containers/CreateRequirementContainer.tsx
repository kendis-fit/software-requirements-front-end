import { connect } from "react-redux";

import CreateRequirement from "../Components/CreateRequirement";


import ProjectApi from "../Api/ProjectApi";

const mapDispatchToProps = (dispatch: any) => ({
    CreateProject: (name: string, parentId?: number) => dispatch(ProjectApi.CreateProject(name, parentId))
});

export default connect(null, mapDispatchToProps)(CreateRequirement);