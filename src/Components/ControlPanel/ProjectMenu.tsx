import React from "react";

import { ContextBlock, ContextItemBlock } from "../Styles/Block";

import IPosition from "../../Interfaces/IPosition";
import EMenu from "../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../Interfaces/IDisplayMenu";
import { Link } from "react-router-dom";

interface IProjectMenu extends IPosition, IDisplayMenu 
{
    SetRequirement(): void;
}

const ProjectMenu = ({ SetRequirement, ShowMenu, X, Y }: IProjectMenu) => {
    return(
        <ContextBlock X={X} Y={Y} Width="220px">
            <ContextItemBlock data-close={false} IsBoardBottom={true} onClick={(): void => {
                SetRequirement();
                ShowMenu({ Name: EMenu.CREATE_PROJECT })
            }}>Create project</ContextItemBlock>
            <ContextItemBlock>Open project from file</ContextItemBlock>
            <ContextItemBlock><Link to="/projects">Open project from list</Link></ContextItemBlock>
        </ContextBlock>
    );
}

export default ProjectMenu;