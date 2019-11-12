import React from "react";
import { connect } from "react-redux";

import IRequirementView from "../../../Interfaces/IRequirementView";
import { TreeNode } from "../../Styles/List";

import ProfileApi from "../../../Api/ProfileApi";

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

const mapDispatchToProps = (dispatch: any) => ({
    SetProfile: (id: number) => dispatch(ProfileApi.GetProfile(id))
});

export default connect(null, mapDispatchToProps)(RequirementItem);