import React from "react";

import Index from "./Index";
import IndexesEmpty from "./IndexesEmpty";
import { Button } from "../../Styles/Button";
import { ButtonsBlock } from "../../Styles/Block";
import CoefficientList from "./Coefficients/CoefficientList";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
// import ICoefficient from "../../../Interfaces/Profile/ICoefficient";
// import IPrimitive from "../../../Interfaces/Profile/IPrimitive";
// import ProfileApi from "../../../Api/ProfileApi";

interface IProfileForm
{
    Id: number;
    Indexes: Array<IIndex>;
}

const ProfileForm = ({ Id, Indexes }: IProfileForm) => {

    const parse = (): void => {

    }

    if (Indexes.length === 0)
        return <IndexesEmpty />
    return(
        <>
            <div style={{ display: "flex", flexDirection: "column", overflowX: "scroll", overflowY: "scroll", width: "calc(100vw - 300px)", height: "850px" }}>
                {
                    Indexes.map((p, i) => 
                        <div key={i} style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
                            <Index Id={i} Name={p.Name} NameIndex={p.NameIndex} />
                            <CoefficientList Id={i} Coefficients={p.Coefficients} />
                        </div>
                    )
                }
            </div>
            <ButtonsBlock>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.SECONDARY} TypeButton="button" Rounde="3px">Visualisation</Button>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="button" Rounde="3px" onClick={() => parse()}>Save</Button>
            </ButtonsBlock>
        </>
    );
}

export default ProfileForm;