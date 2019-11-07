import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";
import IMenuItem from "../../Interfaces/IMenuItem";

interface IControlPanel
{
    Menu: Array<IMenuItem>
}

const ControlPanel = (props: IControlPanel) => {

    return(
        <ControlBlock Height="25px" Type="secondary">
            {
                props.Menu.map(i => {
                    
                    if (i.Name.length <= 1)
                        throw new Error("Length name must be more than 1");

                    return <ControlItemBlock>
                        <TextUnderline>{i.Name[0]}</TextUnderline>
                        <span>{i.Name.substr(1)}</span>
                    </ControlItemBlock>
                })
            }
        </ControlBlock>
    );
}

export default ControlPanel;