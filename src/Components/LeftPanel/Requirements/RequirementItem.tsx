import React from "react";

import { TreeNode } from "../../Styles/List";

import IRequirementView from "../../../Interfaces/IRequirementView";

interface IRequirementItem extends IRequirementView
{
    SetProfile: (id: number) => void;
}

const RequirementItem = ({ Id, ParentId, Name, Level, SetProfile }: IRequirementItem) => {
    return(
        <TreeNode data-id={Id} data-parent-id={ParentId} Level={Level} onClick={(e: any) => SetProfile(e.target.dataset.id)}>
            <span>{Name}</span>
        </TreeNode>
    );
}

export default RequirementItem;