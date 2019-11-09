import React from "react";
import { connect } from "react-redux";

import { TextUnderline } from "../Styles/Text";
import { ShowMenu } from "../../Actions/MenuActions";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

import EMenu from "../../Enumerations/EMenu";
import IMenu from "../../Interfaces/IMenu";

interface IControlPanel
{
    ShowMenu: (name: IMenu) => void;
}

const ControlPanel = ({ ShowMenu }: IControlPanel) => {
    return(
        <ControlBlock Height="25px" Type="secondary">
            <ControlItemBlock data-menu={true} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.PROJECT, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline>P</TextUnderline>
                <span>roject</span>
            </ControlItemBlock>
            <ControlItemBlock data-menu={true} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.SETTINGS, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline>S</TextUnderline>
                <span>ettings</span>
            </ControlItemBlock>
            <ControlItemBlock data-menu={true} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.ABOUT, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline>A</TextUnderline>
                <span>bout</span>
            </ControlItemBlock>
        </ControlBlock>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(null, mapDispatchToProps)(ControlPanel);