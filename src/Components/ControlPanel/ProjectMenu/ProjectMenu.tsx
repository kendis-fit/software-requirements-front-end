import React from "react";
import { connect } from "react-redux";

import { ContextBlock, ContextItemBlock } from "../../Styles/Block";

import IPosition from "../../../Interfaces/IPosition";
import EMenu from "../../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";
import { SetRequirement } from "../../../Actions/RequirementActions";

interface IProjectMenu extends IPosition, IDisplayMenu 
{
    SetRequirement(): void;
}

const ProjectMenu = ({ SetRequirement, ShowMenu, X, Y }: IProjectMenu) => {
    return(
        <ContextBlock X={X} Y={Y} Width="220px">
            <ContextItemBlock data-close={false} IsBoardBottom={true} onClick={(): void => {
                SetRequirement();
                ShowMenu({ Name: EMenu.CREATE_PROJECT })
            }}>Create project</ContextItemBlock>
            <ContextItemBlock>Open project from file</ContextItemBlock>
            <ContextItemBlock>Open project from list</ContextItemBlock>
        </ContextBlock>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    SetRequirement: () => dispatch(SetRequirement(null))
});

export default connect(null, mapDispatchToProps)(ProjectMenu);