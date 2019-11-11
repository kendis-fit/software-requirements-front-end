import React from "react";

import { ControlBlock } from "../Styles/Block";
import SearchPanel from "./SearchPanel";
import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import RequirementList from "./Requirements/RequirementList";

const LeftPanel = () => {
    return(
        <ControlBlock style={{ flexDirection: "column" }} Type={ETypeColor.PRIMARY} OutLine={true} Height="calc(100vh - 25px)" Width="300px">
            <SearchPanel></SearchPanel>
            <ul>
                <RequirementList></RequirementList>
            </ul>
        </ControlBlock>
    );
}

export default LeftPanel;