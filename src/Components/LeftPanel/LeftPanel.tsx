import React from "react";

import { Block } from "../Styles/Block";
import SearchPanelContainer from "../../Containers/SearchPanelContainer";
import InitRequirementsContainer from "../../Containers/InitRequirementsContainer";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import EDirection from "../../Constants/Enumerations/EDirection";

const LeftPanel = () => {
    return(
        <Block Direction={EDirection.COLUMN} Type={ETypeColor.PRIMARY} OutLine={true} Height="calc(100vh - 25px)" Width="300px">
            <SearchPanelContainer />
            <InitRequirementsContainer />
        </Block>
    );
}

export default LeftPanel;