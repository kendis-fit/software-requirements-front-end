import React from "react";

import EMenu from "../Enumerations/EMenu";
import IMenuInteractive from "../Interfaces/IMenuInteractive";

import ProjectMenu from "../Components/ControlPanel/ProjectMenu/ProjectMenu";
import CreateProject from "../Components/ControlPanel/ProjectMenu/CreateProject";

const OverMenu = ({ Menu, ShowMenu }: IMenuInteractive) => {
    switch (Menu.Name)
    {
        case EMenu.PROJECT:
            return <ProjectMenu ShowMenu={ShowMenu} X={Menu.X + "px"} Y={Menu.Y + "px"}></ProjectMenu>
        case EMenu.CREATE_PROJECT:
            return <CreateProject ShowMenu={ShowMenu}></CreateProject>
        default:
            return <></>
    }
}

export default OverMenu;