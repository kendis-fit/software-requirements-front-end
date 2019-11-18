import React from "react";

import { ContextBlock, ContextItemBlock } from "../../Styles/Block";

import IPosition from "../../../Interfaces/IPosition";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";

interface IContextMenu extends IPosition, IDisplayMenu 
{
    Id: number;
    RemoveRequirement: (id: number) => void;
}

const RequirementMenu = ({ Id, RemoveRequirement, ShowMenu, X, Y }: IContextMenu) => {

    return(
        <ContextBlock X={X} Y={Y} Width="150px">
            <ContextItemBlock data-close={false} onClick={() => ShowMenu({ Name: EMenu.ADD_REQUIREMENT })}>Add reqirement</ContextItemBlock>
            <ContextItemBlock onClick={() => RemoveRequirement(Id)}>Remove requirement</ContextItemBlock>
        </ContextBlock>
    );
}

export default RequirementMenu;