import React from "react";

import { ContextBlock, ContextItemBlock } from "../../Styles/Block";

import IPosition from "../../../Interfaces/IPosition";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";

interface IProjectMenu extends IPosition, IDisplayMenu {}

const ProjectMenu = ({ ShowMenu, X, Y }: IProjectMenu) => {
    return(
        <ContextBlock X={X} Y={Y} Width="220px">
            <ContextItemBlock data-close={false} IsBoardBottom={true} onClick={() => ShowMenu({ Name: EMenu.CREATE_PROJECT })}>Create project</ContextItemBlock>
            <ContextItemBlock>Open project from file</ContextItemBlock>
            <ContextItemBlock>Open project from list</ContextItemBlock>
        </ContextBlock>
    );
}

export default ProjectMenu;