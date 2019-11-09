import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

import EMenu from "../../Enumerations/EMenu";
import IDisplayMenu from "../../Interfaces/IDisplayMenu";

const ControlPanel = ({ ShowMenu }: IDisplayMenu) => {
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

export default ControlPanel;