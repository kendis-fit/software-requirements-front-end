import React from "react";

import { ContextBlock, ContextItemBlock } from "../../Styles/Block";
import IPosition from "../../../Interfaces/IPosition";

const ProjectMenu = ({ X, Y }: IPosition) => {
    return(
        <ContextBlock X={X} Y={Y} Width="220px">
            <ContextItemBlock IsBoardBottom={true}>Create project</ContextItemBlock>
            <ContextItemBlock>Open project from file</ContextItemBlock>
            <ContextItemBlock IsBoardBottom={true}>Open project from list</ContextItemBlock>
            <ContextItemBlock IsBoardBottom={true}>Remove project</ContextItemBlock>
            <ContextItemBlock>Rename project</ContextItemBlock>
        </ContextBlock>
    );
}

export default ProjectMenu;