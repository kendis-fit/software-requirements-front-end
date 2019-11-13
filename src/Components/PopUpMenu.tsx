import React from "react";

import EMenu from "../Constants/Enumerations/EMenu";
import IMenuInteractive from "../Interfaces/IMenuInteractive";

import ProjectMenu from "./ControlPanel/ProjectMenu/ProjectMenu";
import RequirementMenu from "./LeftPanel/Requirements/ContextMenu/RequirementMenu";
import CreateRequirementContainer from "../Containers/CreateRequirementContainer";

const PopUpMenu = ({ Menu, ShowMenu }: IMenuInteractive) => {
    switch (Menu.Name)
    {
        case EMenu.PROJECT:
            return <ProjectMenu ShowMenu={ShowMenu} X={Menu.X + "px"} Y={Menu.Y + "px"}></ProjectMenu>
        case EMenu.ADD_REQUIREMENT:
        case EMenu.CREATE_PROJECT:
            return <CreateRequirementContainer></CreateRequirementContainer>
        case EMenu.REQUIREMENT_MENU:
            return <RequirementMenu ShowMenu={ShowMenu} X={Menu.X + "px"} Y={Menu.Y + "px"}></RequirementMenu>
        default:
            return <></>
    }
}

export default PopUpMenu;