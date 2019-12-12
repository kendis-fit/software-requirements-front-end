import React, { Fragment } from "react";

import IndexesEmpty from "./IndexesEmpty";
import { Button } from "../../Styles/Button";
import { Wrapper } from "../../Styles/Wrapper";
import { ButtonsBlock, FlexBlock } from "../../Styles/Block";
import { TextSpace } from "../../Styles/Text";
import CoefficientItem from "./CoefficientItem";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import EDirection from "../../../Constants/Enumerations/EDirection";
import IChangeValue from "../../../Interfaces/Profile/IChangeValue";

interface IProfileForm
{
    Id: number;
    Indexes: Array<IIndex> | null;
    LoadProfile: boolean;
    UpdateProfile: (changeValue: IChangeValue) => void;
    SubmitUpdateProfile: (id: number, profile: string) => void;
}

const ProfileForm = ({ Id, Indexes, LoadProfile, UpdateProfile, SubmitUpdateProfile }: IProfileForm) => {
    if (LoadProfile)
        return <span>Loading...</span>
    if (Indexes === null || Indexes.length === 0)
        return <IndexesEmpty Text={Indexes === null ? "Group doesn't have profile" : "Empty" } />
    return(
        <form onSubmit={(e: any) =>{ e.preventDefault(); SubmitUpdateProfile(Id, JSON.stringify(Indexes))}}>
            <div style={{ overflowX: "scroll", overflowY: "scroll", width: "100%", height: "850px" }}>
                {
                    Indexes.map((I, i) =>
                        <Wrapper key={i} Top="20px" Left="20px" Right="20px" Bottom="20px">
                            <FlexBlock Direction={EDirection.ROW}>
                                <TextSpace title={I.Name}>{I.NameIndex}</TextSpace>
                                {
                                    I.Coefficients.map((c, i) => {

                                    return <Fragment key={i}>
                                        {
                                            c.NameMetric ?
                                            <TextSpace title={c.Name}>{c.NameMetric}</TextSpace>
                                            :
                                            <TextSpace>{c.Name}</TextSpace>
                                        }
                                        <CoefficientItem UpdateProfile={(value) => UpdateProfile({ Name: c.Name, NameIndex: I.NameIndex, Value: value })}
                                            ReadOnly={c.Primitives ? true : false} Value={c.Value} />
                                        {
                                            c.Primitives && 
                                            <>
                                                {
                                                    c.Primitives.map((p, i) => 
                                                        <Fragment key={i}>
                                                            <TextSpace>{p.Name}</TextSpace>
                                                            <CoefficientItem UpdateProfile={(value) => UpdateProfile({ Name: c.Name, NameIndex: I.NameIndex, Value: value, NamePrimitive: p.Name })}
                                                                ReadOnly={false} Value={p.Value} />
                                                        </Fragment>
                                                    )
                                                }
                                            </>
                                        }
                                    </Fragment>
                                    })
                                }
                            </FlexBlock>
                        </Wrapper>
                    )
                }
            </div>
            <ButtonsBlock>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.SECONDARY} TypeButton="button" Rounde="3px">Visualisation</Button>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="submit" Rounde="3px">Save</Button>
            </ButtonsBlock>
        </form>
    );
}

export default ProfileForm;