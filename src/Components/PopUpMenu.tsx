import React from "react";

import ProjectMenuContainer from "../Containers/ProjectMenuContainer";
import RequirementMenuContainer from "../Containers/RequirementMenuContainer";
import CreateRequirementContainer from "../Containers/CreateRequirementContainer";

import IMenu from "../Interfaces/IMenu";
import EMenu from "../Constants/Enumerations/EMenu";

interface IPopUpMenu
{
    Menu: IMenu;
}

const PopUpMenu = ({ Menu }: IPopUpMenu) => {
    switch (Menu.Name)
    {
        case EMenu.PROJECT:
            return <ProjectMenuContainer X={Menu.X + "px"} Y={Menu.Y + "px"} />
        case EMenu.ADD_REQUIREMENT:
        case EMenu.CREATE_PROJECT:
            return <CreateRequirementContainer></CreateRequirementContainer>
        case EMenu.REQUIREMENT_MENU:
            return <RequirementMenuContainer X={Menu.X + "px"} Y={Menu.Y + "px"}></RequirementMenuContainer>
        default:
            return <></>
    }
}

export default PopUpMenu;