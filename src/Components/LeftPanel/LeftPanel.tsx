import React from "react";

import { ControlBlock } from "../Styles/Block";
import SearchPanel from "./SearchPanel";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";

const LeftPanel = () => {
    return(
        <ControlBlock Type={ETypeColor.PRIMARY} OutLine={true} Height="calc(100vh - 25px)" Width="300px">
            <SearchPanel></SearchPanel>
        </ControlBlock>
    );
}

export default LeftPanel;