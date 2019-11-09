import React from "react";

import { DarkBackgroundBlock, SmallBlockByCenter } from "../../Styles/Block";

import EMenu from "../../../Enumerations/EMenu";
import IDisplayMenu from "../../../Interfaces/IDisplayMenu";

const CreateProject = ({ ShowMenu }: IDisplayMenu) => {
    return(
        <>
            <DarkBackgroundBlock onClick={() => ShowMenu({ Name: EMenu.NONE })}></DarkBackgroundBlock>
            <SmallBlockByCenter data-menu={true}></SmallBlockByCenter>
        </>
    );
}

export default CreateProject;