import React from "react";

import { TreeNode } from "../../Styles/List";
import { BlockShowHide } from "../../Styles/Block";

import IMenu from "../../../Interfaces/IMenu";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IRequirementView from "../../../Interfaces/IRequirementView";
import IRequirementSelect from "../../../Interfaces/IRequirementSelect";

interface IRequirementItem extends IRequirementView
{
    SelectedId: number | null;
    SetRequirement: (requirement: IRequirementSelect) => void;
    SetProfile: (id: number) => void;
    ShowMenu: (menu: IMenu) => void;
}

const RequirementItem = ({ SelectedId, Id, ParentId, Name, Level, Write, SetRequirement, SetProfile, ShowMenu }: IRequirementItem) => {
    return(
        <TreeNode data-id={Id} Selected={SelectedId === Id} data-parent-id={ParentId} Level={Level} Write={Write} onClick={(e: any) => {
            if (!e.target.dataset.action) {
                SetRequirement({ Id: Number(e.currentTarget.dataset.id), IsProject: ParentId === undefined, Index: null, Write, Name });
                SetProfile(e.currentTarget.dataset.id);
            }
        }}
        onContextMenu={(e: any) => {
            if (!e.target.dataset.action) {
                SetRequirement({ Id: Number(e.currentTarget.dataset.id), IsProject: ParentId === undefined, Index: null, Write, Name });
                ShowMenu({ Name: EMenu.REQUIREMENT_MENU, X: e.pageX, Y: e.pageY });
            }
        }}>
            <BlockShowHide onClick={(e): any => setVisibilityChildren(e)} data-action="hide">-</BlockShowHide>
            <span>{Name}</span>
        </TreeNode>
    );
}

function setVisibilityChildrenConnection(id: string, isVisible: boolean) {

    const children = document.querySelectorAll(`[data-parent-id="${id}"]`) as any;

    children.forEach((c: any) => {
        isVisible ? c.style.display = "flex" : c.style.display = "none";

        if (isVisible)
        {
            const actionChild = [...c.childNodes].find(c => c.tagName === "DIV");//.dataset.action;

            if (actionChild && actionChild.dataset.action === "hide")
                setVisibilityChildrenConnection(c.dataset.id, true);

        }
        else setVisibilityChildrenConnection(c.dataset.id, false);
    });
}

function setVisibilityChildren(e: any) {

    if (e.target.hasAttribute("data-action")) {

        const collapse = e.target;

        const action = collapse.dataset.action;
        const parentId = collapse.parentNode.dataset.id;

        setVisibilityChildrenConnection(parentId, action === "show");

        collapse.innerText = action === "hide" ? "+" : "-";
        collapse.dataset.action = action === "hide" ? "show" : "hide";  
    }
}

export default RequirementItem;