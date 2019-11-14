import React from "react";

import Index from "./Index";
import IndexesEmpty from "./IndexesEmpty";
import { Button } from "../../Styles/Button";
import { ButtonsBlock } from "../../Styles/Block";
import CoefficientList from "./Coefficients/CoefficientList";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";

interface IProfileForm
{
    Indexes: Array<IIndex>;
}

const ProfileForm = ({ Indexes }: IProfileForm) => {

    if (Indexes.length === 0)
        return <IndexesEmpty />
    return(
        <>
            <div style={{ display: "flex", flexDirection: "column", overflowX: "scroll", overflowY: "scroll", width: "calc(100vw - 300px)", height: "850px" }}>
                {
                    Indexes.map(p => 
                        <div style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
                            <Index Name={p.Name} NameIndex={p.NameIndex} />
                            <CoefficientList Coefficients={p.Coefficients} />
                        </div>
                    )
                }
            </div>
            <ButtonsBlock>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.SECONDARY} TypeButton="button" Rounde="3px">Visualisation</Button>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="button" Rounde="3px">Save</Button>
            </ButtonsBlock>
        </>
    );
}

export default ProfileForm;