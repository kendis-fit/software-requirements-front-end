import React from "react";

import { DarkBackgroundBlock } from "../../Styles/Block";
import IMenu from "../../../Interfaces/IMenu";
import EMenu from "../../../Enumerations/EMenu";

interface ICreateProject
{
    ShowMenu: (menu: IMenu) => void;
}

const CreateProject = ({ ShowMenu }: ICreateProject) => {
    return(
        <>
            <DarkBackgroundBlock onClick={() => ShowMenu({ Name: EMenu.NONE })}></DarkBackgroundBlock>
        </>
    );
}

export default CreateProject;