import React from "react";

import EMenu from "../Constants/Enumerations/EMenu";
import IMenuInteractive from "../Interfaces/IMenuInteractive";

import ProjectMenu from "./ControlPanel/ProjectMenu/ProjectMenu";
import CreateProject from "./ControlPanel/ProjectMenu/CreateProject";

const PopUpMenu = ({ Menu, ShowMenu }: IMenuInteractive) => {
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

export default PopUpMenu;