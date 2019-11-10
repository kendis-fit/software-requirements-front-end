import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

import EMenu from "../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../Interfaces/IDisplayMenu";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";

const ControlPanel = ({ ShowMenu }: IDisplayMenu) => {
    return(
        <ControlBlock Height="25px" Type={ETypeColor.SECONDARY}>
            <ControlItemBlock data-close={false} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.PROJECT, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline data-close={false}>P</TextUnderline>
                <span data-close={false}>roject</span>
            </ControlItemBlock>
            <ControlItemBlock data-close={false} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.SETTINGS, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline data-close={false}>S</TextUnderline>
                <span data-close={false}>ettings</span>
            </ControlItemBlock>
            <ControlItemBlock data-close={false} onClick={(e: any): void => ShowMenu(
                    { 
                        Name: EMenu.ABOUT, 
                        X: e.target.getBoundingClientRect().left,
                        Y: e.target.getBoundingClientRect().bottom
                    })}>
                <TextUnderline data-close={false}>A</TextUnderline>
                <span data-close={false}>bout</span>
            </ControlItemBlock>
        </ControlBlock>
    );
}

export default ControlPanel;