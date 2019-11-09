import React from "react";

import EMenu from "../Enumerations/EMenu";

import ProjectMenu from "../Components/ControlPanel/ProjectMenu/ProjectMenu";
import IMenu from "../Interfaces/IMenu";

interface IOverMenu
{
    Menu: IMenu;
}

const OverMenu = ({ Menu }: IOverMenu) => {
    switch (Menu.Name)
    {
        case EMenu.PROJECT:
            return <ProjectMenu X={Menu.X + "px"} Y={Menu.Y + "px"}></ProjectMenu>
        default:
            return <></>
    }
}

export default OverMenu;