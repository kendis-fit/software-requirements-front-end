import React from "react";

import { TextUnderline } from "../Styles/Text";
import { ControlBlock, ControlItemBlock } from "../Styles/Block";

const ControlPanel = () => {
    return(
        <ControlBlock Height="25px" Type="secondary">
            <ControlItemBlock>
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
    );
}

export default ControlPanel;