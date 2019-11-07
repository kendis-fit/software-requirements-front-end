import React from "react";

import { ContextBlock } from "../../Styles/Block";
import IPosition from "../../../Interfaces/IPosition";

const ProjectMenu = ({ X, Y }: IPosition) => {
    return(
        <ContextBlock X={X} Y={Y} Height="200px">
            <div>Create project</div>
            <div>Open project from file</div>
            <div>Open project from list</div>
            <div>Remove project</div>
            <div>Rename project</div>
        </ContextBlock>
    );
}

export default ProjectMenu;