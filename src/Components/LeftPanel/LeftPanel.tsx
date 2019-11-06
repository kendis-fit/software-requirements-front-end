import React from "react";

import { ControlBlock } from "../Styles/Block";
import SearchPanel from "./SearchPanel";

const LeftPanel = () => {
    return(
        <ControlBlock Type="primary" OutLine={true} Height="100vh" Width="300px">
            <SearchPanel></SearchPanel>
        </ControlBlock>
    );
}

export default LeftPanel;