import React, { Fragment } from "react";

import Item from "./Item";
import IndexesEmpty from "./IndexesEmpty";
import { Button } from "../../Styles/Button";
import { TextSpace } from "../../Styles/Text";
import { Wrapper } from "../../Styles/Wrapper";
import { ButtonsBlock, FlexBlock } from "../../Styles/Block";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import EDirection from "../../../Constants/Enumerations/EDirection";
import IChangeValue from "../../../Interfaces/Profile/IChangeValue";
import ICoefficient from "../../../Interfaces/Profile/ICoefficient";
import IRequirementSelect from "../../../Interfaces/IRequirementSelect";

interface IProfileForm
{
    Requirement: IRequirementSelect;
    Indexes: IIndex[] | null;
    LoadProfile: boolean;
    UpdateProfile: (changeValue: IChangeValue) => void;
    SubmitUpdateProfile: (id: number, profile: string) => void;
    ShowResult: (id: string) => void;
    ShowDiagram: (id: string) => void;
}

const ProfileForm = ({ Requirement, Indexes, LoadProfile, UpdateProfile, SubmitUpdateProfile, ShowResult, ShowDiagram }: IProfileForm) => {
    if (LoadProfile)
        return <span>Loading...</span>
    if (Indexes === null || Indexes.length === 0)
        return <IndexesEmpty Text={Indexes === null ? "Group doesn't have profile" : "Empty" } />
    
    const isCoeffsLessEqual1 = (coeffs: ICoefficient[]): boolean => {
        if (coeffs.length === 0) return true;
        const values = coeffs.map(c => c.Value || 0);
        const metrics = coeffs.map(c => c.Metric ? (c.Metric.Value || 0) : 0);
        const result = Number.parseFloat(values.reduce((a, b) => a + b).toFixed(1));
        const resultMetrics = Number.parseFloat(metrics.reduce((a, b) => a + b).toFixed(1))
        return Math.fround(result) <= 1 && Math.fround(resultMetrics) <= 1;
    }

    const SaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = Indexes.every(i => isCoeffsLessEqual1(i.Coefficients));
        if (isFormValid && Requirement.Id) SubmitUpdateProfile(Requirement.Id, JSON.stringify(Indexes));
    }

    return(
        <form onSubmit={SaveProfile}>
            <div style={{ overflowX: "scroll", overflowY: "scroll", width: "100%", height: "850px" }}>
                {
                    Indexes.map((I, i) =>
                        <Wrapper key={i} Top="20px" Left="20px" Right="20px" Bottom="20px">
                            <FlexBlock Direction={EDirection.ROW}>
                                <button data-close={false} type="button" onClick={() => ShowDiagram(I.NameIndex)}>Visualisation</button>
                                <button data-close={false} type="button" onClick={() => ShowResult(I.NameIndex)}>Calculate</button>
                                <TextSpace title={I.Name}>{I.NameIndex}</TextSpace>
                                {
                                    I.Coefficients.map((c, i) => { 

                                    return <Fragment key={i}>
                                        <TextSpace>{c.Name}</TextSpace>
                                        <Item UpdateProfile={(value) => UpdateProfile({ NameCoefficient: c.Name, NameIndex: I.NameIndex, Value: value })}
                                            ReadOnly={false} Value={c.Value} />
                                        {
                                            c.Metric && 
                                            <>
                                                <TextSpace title={c.Metric.NameMetric}>{c.Metric.Name}</TextSpace>
                                                <Item UpdateProfile={(value) => 
                                                UpdateProfile({ NameCoefficient: c.Name, NameMetric: c.Metric!.Name, NameIndex: I.NameIndex, Value: value })}
                                                ReadOnly={c.Metric.Primitives ? true : false} Value={c.Metric.Value} />
                                                {
                                                    c.Metric.Primitives &&
                                                    <>
                                                    {
                                                        c.Metric.Primitives.map((p, i) => 
                                                            <Fragment key={i}>
                                                                <TextSpace>{p.Name}</TextSpace>
                                                                <Item UpdateProfile={(value) =>
                                                                UpdateProfile({ NameCoefficient: c.Name, NameMetric: c.Metric!.Name, NameIndex: I.NameIndex,
                                                                NamePrimitive: p.Name, Value: value })}
                                                                ReadOnly={false} Value={p.Value} />
                                                            </Fragment>)
                                                    }
                                                    </>
                                                }
                                            </>
                                        }
                                    </Fragment>
                                    })
                                }
                                <div style={ { color: "red", paddingLeft: "10px", display: isCoeffsLessEqual1(I.Coefficients) ? "none" : "" } }>
                                    Coefficients and metrics in total have to give less or equal 1
                                </div>
                            </FlexBlock>
                        </Wrapper>
                    )
                }
            </div>
            <ButtonsBlock>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="submit" Rounde="3px">Save</Button>
            </ButtonsBlock>
        </form>
    );
}

export default ProfileForm;