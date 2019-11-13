import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

import EMenu from "../../Constants/Enumerations/EMenu";
import IDisplayMenu from "../../Interfaces/IDisplayMenu";

const ControlPanel = ({ ShowMenu }: IDisplayMenu) => {
    
    const changeMenu = (name: EMenu, x?: string, y?: string): void => ShowMenu({ Name: name, X: x, Y: y });
    const menuList: Array<any> = [
        {
            Name: "Project",
            Type: EMenu.PROJECT
        },
        {
            Name: "Settings",
            Type: EMenu.SETTINGS
        },
        {
            Name: "About",
            Type: EMenu.ABOUT
        }
    ]

    return(
        <ControlBlock>
            {
                menuList.map(m =>
                    <ControlItemBlock data-close={false} onClick={(e: any): void => 
                        changeMenu(m.Type, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().bottom)
                     }>
                         <TextUnderline data-close={false}>{m.Name.substr(0, 1)}</TextUnderline>
                         <span data-close={false}>{m.Name.substr(1)}</span>
                     </ControlItemBlock>
                )
            }
        </ControlBlock>
    );
}

export default ControlPanel;