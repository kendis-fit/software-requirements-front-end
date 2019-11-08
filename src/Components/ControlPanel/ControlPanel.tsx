import React from "react";
import { connect } from "react-redux";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";
import ProjectMenu from "./ProjectMenu/ProjectMenu";
import { ShowMenu } from "../../Actions/MenuActions";

import EMenu from "../../Enumerations/EMenu";

interface IControlPanel
{
    Menu: EMenu;
    ShowMenu: (name: EMenu) => void;
}

const ControlPanel = ({ Menu, ShowMenu }: IControlPanel) => {

    const buttonProject = React.useRef<HTMLButtonElement>(null);
    
    return(
        <>
            <ControlBlock Height="25px" Type="secondary">
                <ControlItemBlock data-menu={true} ref={buttonProject} onClick={(): void => ShowMenu(EMenu.PROJECT)}>
                    <TextUnderline>P</TextUnderline>
                    <span>roject</span>
                </ControlItemBlock>
                <ControlItemBlock data-menu={true}>
                    <TextUnderline>S</TextUnderline>
                    <span>ettings</span>
                </ControlItemBlock>
                <ControlItemBlock data-menu={true}>
                    <TextUnderline>A</TextUnderline>
                    <span>bout</span>
                </ControlItemBlock>
            </ControlBlock>
            {
                Menu === EMenu.PROJECT &&
                <ProjectMenu 
                    X={buttonProject.current!.getBoundingClientRect().left.toString() + "px"}
                    Y={buttonProject.current!.getBoundingClientRect().bottom.toString() + "px"}
                ></ProjectMenu>
            }
        </>
    );
}

const mapStateToProps = (state: any) => ({
    Menu: state.Menu
});

const mapDispatchToProps = (dispatch: any) => ({
    ShowMenu: (name: EMenu) => {
        dispatch(ShowMenu(name))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);