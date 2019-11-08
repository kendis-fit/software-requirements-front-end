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
                <ControlItemBlock ref={buttonProject} onClick={(): number => setTimeout((): void => ShowMenu(EMenu.PROJECT), 1)}>
                    <TextUnderline>P</TextUnderline>
                    <span>roject</span>
                </ControlItemBlock>
                <ControlItemBlock>
                    <TextUnderline>S</TextUnderline>
                    <span>ettings</span>
                </ControlItemBlock>
                <ControlItemBlock>
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