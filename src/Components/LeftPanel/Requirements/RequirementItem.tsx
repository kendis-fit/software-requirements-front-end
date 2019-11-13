import React from "react";

import { TreeNode } from "../../Styles/List";

import IRequirementView from "../../../Interfaces/IRequirementView";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IMenu from "../../../Interfaces/IMenu";

interface IRequirementItem extends IRequirementView
{
    SetProfile: (id: number) => void;
    ShowMenu: (menu: IMenu) => void;
}

const RequirementItem = ({ Id, ParentId, Name, Level, SetProfile, ShowMenu }: IRequirementItem) => {
    return(
        <TreeNode data-id={Id} data-parent-id={ParentId} Level={Level} onClick={(e: any) => SetProfile(e.target.dataset.id)}
        onContextMenu={(e: any) => ShowMenu({ Name: EMenu.REQUIREMENT_MENU, X: e.pageX, Y: e.pageY })}>
            <span>{Name}</span>
        </TreeNode>
    );
}

export default RequirementItem;