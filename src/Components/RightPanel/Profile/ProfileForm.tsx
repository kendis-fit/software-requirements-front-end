import React, { Fragment } from "react";

import IndexesEmpty from "./IndexesEmpty";
import { Button } from "../../Styles/Button";
import { Wrapper } from "../../Styles/Wrapper";
import { ButtonsBlock, FlexBlock } from "../../Styles/Block";
import { TextUnderline, TextSpace } from "../../Styles/Text";

import IIndex from "../../../Interfaces/Profile/IIndex";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import EDirection from "../../../Constants/Enumerations/EDirection";
import IChangeValue from "../../../Interfaces/Profile/IChangeValue";

import ProfileApi from "../../../Api/ProfileApi";

interface IProfileForm
{
    Id: number;
    Indexes: Array<IIndex>;
    UpdateProfile: (changeValue: IChangeValue) => void;
}

const ProfileForm = ({ Id, Indexes, UpdateProfile }: IProfileForm) => {

    console.log(Indexes);

    if (Indexes.length === 0)
        return <IndexesEmpty />
    return(
        <>
            <div style={{ display: "flex", flexDirection: "column", overflowX: "scroll", overflowY: "scroll", width: "calc(100vw - 300px)", height: "850px" }}>
                {
                    Indexes.map((p, i) =>
                        <Wrapper key={i} Top="20px" Left="20px" Right="20px" Bottom="20px">
                            <FlexBlock Direction={EDirection.ROW}>
                                <TextSpace>{p.NameIndex}</TextSpace>
                                <TextSpace>
                                    <TextUnderline>{p.Name}</TextUnderline>
                                    <span>:</span>   
                                </TextSpace>
                                {
                                    p.Coefficients.map((c, i) => {

                                    console.log(c.Value);

                                    return <Fragment key={i}>
                                        {
                                            c.NameMetric ?
                                            <>
                                                <TextSpace>{c.NameMetric}</TextSpace>
                                                <TextSpace>
                                                    <TextUnderline>{c.Name}</TextUnderline>
                                                </TextSpace>
                                            </>
                                            :
                                            <TextSpace>{c.Name}</TextSpace>
                                        }
                                        <input onChange={(e: any) => {

                                            let value = null;
                                            if (!Number.isNaN(e.target.value) && e.target.value > 0)
                                                value = Number(e.target.value);

                                            UpdateProfile({ Name: c.Name, NameIndex: p.NameIndex, Value: value  })}
                                        } readOnly={c.Primitives ? true : false} value={c.Value || ""} />
                                        {
                                            c.Primitives && 
                                            <>
                                                <TextSpace>Primitives</TextSpace>
                                                {
                                                    c.Primitives.map((p, i) => 
                                                        <Fragment key={i}>
                                                            <TextSpace>{p.Name}</TextSpace>
                                                            <input value={p.Value ? p.Value : undefined} />
                                                        </Fragment>
                                                    )
                                                }
                                            </>
                                        }
                                    </Fragment>
                                    }
                                    )
                                }
                            </FlexBlock>
                        </Wrapper>
                    )
                }
            </div>
            <ButtonsBlock>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.SECONDARY} TypeButton="button" Rounde="3px">Visualisation</Button>
                <Button onClick={() => ProfileApi.UpdateProfile(Id, JSON.stringify(Indexes))} style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="button" Rounde="3px">Save</Button>
            </ButtonsBlock>
        </>
    );
}

export default ProfileForm;