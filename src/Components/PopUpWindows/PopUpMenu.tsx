import React from "react";

import ShowResultContainer from "../../Containers/ShowResultContainer";
import ShowDiagramContainer from "../../Containers/ShowDiagramContainer";
import ProjectMenuContainer from "../../Containers/ProjectMenuContainer";
import RequirementMenuContainer from "../../Containers/RequirementMenuContainer";
import CreateRequirementContainer from "../../Containers/CreateRequirementContainer";
import ConfirmDeleteRequirementContainer from "../../Containers/ConfirmDeleteRequirementContainer";

import IMenu from "../../Interfaces/IMenu";
import EMenu from "../../Constants/Enumerations/EMenu";

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
            return <CreateRequirementContainer />
        case EMenu.REQUIREMENT_MENU:
            return <RequirementMenuContainer X={Menu.X + "px"} Y={Menu.Y + "px"} />
        case EMenu.REMOVE_REQUIREMENT:
            return <ConfirmDeleteRequirementContainer />
        case EMenu.SHOW_RESULT:
            return <ShowResultContainer />
        case EMenu.SHOW_DIAGRAM:
            return <ShowDiagramContainer />
        default:
            return <></>
    }
}

export default PopUpMenu;