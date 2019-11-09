import React from "react";

import IPosition from "../../../Interfaces/IPosition";
import { ContextBlock, ContextItemBlock } from "../../Styles/Block";
import EMenu from "../../../Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";

interface IProjectMenu extends IPosition, IDisplayMenu {}

const ProjectMenu = ({ ShowMenu, X, Y }: IProjectMenu) => {
    return(
        <ContextBlock X={X} Y={Y} Width="220px">
            <ContextItemBlock data-menu={true} IsBoardBottom={true} onClick={() => ShowMenu({ Name: EMenu.CREATE_PROJECT })}>Create project</ContextItemBlock>
            <ContextItemBlock>Open project from file</ContextItemBlock>
            <ContextItemBlock IsBoardBottom={true}>Open project from list</ContextItemBlock>
            <ContextItemBlock IsBoardBottom={true}>Save project</ContextItemBlock>
            <ContextItemBlock IsBoardBottom={true}>Remove project</ContextItemBlock>
            <ContextItemBlock>Rename project</ContextItemBlock>
        </ContextBlock>
    );
}

export default ProjectMenu;