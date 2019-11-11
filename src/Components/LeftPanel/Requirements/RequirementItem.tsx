import React from "react";
import { NavLink } from "react-router-dom";

import IRequirementView from "../../../Interfaces/IRequirementView";
import { TreeNode } from "../../Styles/List";

const RequirementItem = ({ Id, ParentId, Name, Level }: IRequirementView) => {
    return(
        <TreeNode data-id={Id} data-parent-id={ParentId} Level={Level}>
            <NavLink to={`/profiles/${Id}`}>{Name}</NavLink>
        </TreeNode>
    );
}

export default RequirementItem;