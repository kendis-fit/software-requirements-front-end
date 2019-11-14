import React from "react";

import { Button } from "../../Styles/Button";
import { Text, TextUnderline } from "../../Styles/Text";

import IMetric from "../../../Interfaces/Profile/IMetric";
import ETypeColor from "../../../Constants/Enumerations/ETypeColor";
import { FlexBlock } from "../../Styles/Block";

interface IProfileForm
{
    Metrics: Array<IMetric>;
}

const ProfileForm = ({ Metrics }: IProfileForm) => {

    if (Metrics.length === 0)
        return(
            <div style={{ position: "absolute", top: "30%", left: "40%" }}>
                <Text Size="172px">Empty</Text>
            </div>
        );      
    return(
        <>
        <div style={{ display: "flex", flexDirection: "column", overflowX: "scroll", overflowY: "scroll", width: "calc(100vw - 300px)", height: "850px" }}>
            {
                Metrics.map(p => 
                    <div style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
                        <span style={{ marginRight: "5px" }}>{p.NameIndex}</span>
                        <TextUnderline>{p.Name}: </TextUnderline>
                        {
                            p.Coefficients.length > 0 &&
                            p.Coefficients.map(c => {

                                return(
                                    <>
                                        {
                                            c.NameMetric ?
                                            <>
                                                <span style={{ marginLeft: "10px", marginRight: "5px" }}>{c.NameMetric}</span>
                                                <TextUnderline style={{ marginRight: "5px" }}>{c.Name}: </TextUnderline>
                                            </>
                                            :
                                            <span style={{ marginLeft: "10px", marginRight: "5px" }}>{c.Name}</span>
                                        }
                                        <input readOnly={c.Primitives ? true : false} value={c.Value ? c.Value : undefined} style={{ width: "100px" }} />
                                        {
                                            c.Primitives && <span style={{ marginLeft: "5px" }}>Primitives</span>
                                        }
                                        {
                                            c.Primitives && c.Primitives.map((p: any) =>
                                                <>
                                                    <span style={{ marginLeft: "10px", marginRight: "5px" }}>{p.Name}</span>
                                                    <input value={c.Value ? c.Value : undefined} style={{ width: "100px" }} />
                                                </>
                                            )
                                        }
                                    </>
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
            <FlexBlock style={{ justifyContent: "end" }}>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.SECONDARY} TypeButton="button" Rounde="3px">Visualisation</Button>
                <Button style={{ margin: "5px" }} ReadOnly={false} Type={ETypeColor.PRIMARY} TypeButton="button" Rounde="3px">Save</Button>
            </FlexBlock>
        </>
    );
}

export default ProfileForm;