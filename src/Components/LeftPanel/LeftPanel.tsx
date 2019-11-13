import React from "react";

import { Block } from "../Styles/Block";
import SearchPanel from "./SearchPanel";
import RequirementListContainer from "../../Containers/RequirementListContainer";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import EDirection from "../../Constants/Enumerations/EDirection";

const LeftPanel = () => {
    return(
        <Block Direction={EDirection.COLUMN} Type={ETypeColor.PRIMARY} OutLine={true} Height="calc(100vh - 25px)" Width="300px">
            <SearchPanel></SearchPanel>
            <ul>
                <RequirementListContainer Level={1} />
            </ul>
        </Block>
    );
}

export default LeftPanel;