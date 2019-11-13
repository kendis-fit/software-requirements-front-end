import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

import EMenu from "../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../Interfaces/IDisplayMenu";

const ControlPanel = ({ ShowMenu }: IDisplayMenu) => {
    
    const changeMenu = (name: EMenu, x?: string, y?: string): void => ShowMenu({ Name: name, X: x, Y: y });
    
    return(
        <ControlBlock>
            <ControlItemBlock data-close={false} onClick={(e: any): void => 
               changeMenu(EMenu.PROJECT, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().bottom)
            }>
                <TextUnderline data-close={false}>P</TextUnderline>
                <span data-close={false}>roject</span>
            </ControlItemBlock>
            <ControlItemBlock data-close={false} onClick={(e: any): void =>
                changeMenu(EMenu.SETTINGS, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().bottom)
            }>
                <TextUnderline data-close={false}>S</TextUnderline>
                <span data-close={false}>ettings</span>
            </ControlItemBlock>
            <ControlItemBlock data-close={false} onClick={(e: any): void => 
                changeMenu(EMenu.ABOUT, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().bottom)
            }>
                <TextUnderline data-close={false}>A</TextUnderline>
                <span data-close={false}>bout</span>
            </ControlItemBlock>
        </ControlBlock>
    );
}

export default ControlPanel;