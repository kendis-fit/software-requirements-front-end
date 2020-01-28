import React, { Fragment } from "react";

import Item from "./Item";
import IndexesEmpty from "./IndexesEmpty";
import { TextSpace, TextIndex } from "../../Styles/Text";
import { Wrapper } from "../../Styles/Wrapper";
import { ButtonsBlock, FlexBlock } from "../../Styles/Block";
import { Button, ButtonWithImage } from "../../Styles/Button";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import EDirection from "../../../Constants/Enumerations/EDirection";
import IChangeValue from "../../../Interfaces/Profile/IChangeValue";
import ICoefficient from "../../../Interfaces/Profile/ICoefficient";
import IRequirementSelect from "../../../Interfaces/IRequirementSelect";
import ERequirementWrite from "../../../Constants/Enumerations/ERequirementWrite";

import calculation from "../../../Images/Calculation.gif";
import visualisation from "../../../Images/Visualisation.gif";

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
    
    const isCoeffsEqual1 = (coeffs: ICoefficient[]): boolean => {
        if (coeffs.length === 0) return true;
        const values = coeffs.map(c => c.Value || 0);
        const result = Number.parseFloat(values.reduce((a, b) => a + b).toFixed(1));
        return result === 1;
    }

    const SaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const indexesWithError = Indexes.filter(i => !isCoeffsEqual1(i.Coefficients));

        const isFormValid = indexesWithError.length === 0;
        if (isFormValid && Requirement.Id) SubmitUpdateProfile(Requirement.Id, JSON.stringify(Indexes));
        else
        {
            let indexesWithErrorMessage = "Save: failed\n";
            indexesWithError.forEach(i => indexesWithErrorMessage += `Coefficients by index ${i.NameIndex} in total have to give equal 1\n`);
            alert(indexesWithErrorMessage);
        }
    }

    return(
        <form onSubmit={SaveProfile}>
            <div style={{ overflowX: "scroll", overflowY: "scroll", width: "100%", height: "850px" }}>
                {
                    Indexes.map((I, i) =>
                        <Wrapper key={i} Top="20px" Left="20px" Right="20px" Bottom="20px">
                            <FlexBlock Direction={EDirection.ROW}>
                                <TextIndex title={I.Name}>{I.NameIndex}:</TextIndex>
                                <ButtonWithImage data-close={false} disabled={Requirement.Write === ERequirementWrite.CREATED} type="button" onClick={() => ShowResult(I.NameIndex)}>
                                    <img data-close={false} src={calculation} width={50} height={50} alt="calculation" />
                                </ButtonWithImage>
                                <ButtonWithImage data-close={false} disabled={Requirement.Write === ERequirementWrite.CREATED} type="button" onClick={() => ShowDiagram(I.NameIndex)}>
                                    <img data-close={false} src={visualisation} width={50} height={50} alt="visualisation" />
                                </ButtonWithImage>
                                <FlexBlock Direction={EDirection.COLUMN}>
                                    <FlexBlock Direction={EDirection.ROW}>
                                    {
                                        I.Coefficients.map((c, i) => { 
                                            
                                            return <Fragment key={i}>
                                            <TextSpace>{c.Name}</TextSpace>
                                            <Item UpdateProfile={(value) => UpdateProfile({ NameCoefficient: c.Name, NameIndex: I.NameIndex, Value: value })}
                                                ReadOnly={false} Value={c.Value} />
                                        </Fragment>
                                        })
                                    }
                                    </FlexBlock>
                                    <FlexBlock Direction={EDirection.ROW} style={{ paddingTop: "5px" }}>
                                    {
                                        I.Coefficients.map((c, i) => {
                                            return <Fragment key={i}>
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
                                    </FlexBlock>
                                </FlexBlock>
                                <div style={ { color: "red", paddingLeft: "10px", display: isCoeffsEqual1(I.Coefficients) ? "none" : "" } }>
                                    Coefficients in total have to give equal 1
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