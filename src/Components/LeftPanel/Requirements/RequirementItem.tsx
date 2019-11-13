import React from "react";

import { TreeNode } from "../../Styles/List";

import IMenu from "../../../Interfaces/IMenu";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IRequirementView from "../../../Interfaces/IRequirementView";

interface IRequirementItem extends IRequirementView
{
    SetRequirement: (id: number) => void;
    SetProfile: (id: number) => void;
    ShowMenu: (menu: IMenu) => void;
}

const RequirementItem = ({ Id, ParentId, Name, Level, SetRequirement, SetProfile, ShowMenu }: IRequirementItem) => {
    return(
        <TreeNode data-id={Id} data-parent-id={ParentId} Level={Level} onClick={(e: any) => SetProfile(e.target.dataset.id)}
        onContextMenu={(e: any) => {
            SetRequirement(e.target.dataset.id);
            ShowMenu({ Name: EMenu.REQUIREMENT_MENU, X: e.pageX, Y: e.pageY })
        }}>
            <span>{Name}</span>
        </TreeNode>
    );
}

export default RequirementItem;