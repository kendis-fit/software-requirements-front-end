import React from "react";
import { connect } from "react-redux";

import IProfile from "../../../Interfaces/IProfile"
import { Text, TextUnderline } from "../../Styles/Text";

interface IProfileForm
{
    Metrics: Array<IProfile>;
}

const ProfileForm = ({ Metrics }: IProfileForm) => {

    if (Metrics.length === 0)
        return(
            <div style={{ position: "absolute", top: "30%", left: "40%" }}>
                <Text Size="172px">Empty</Text>
            </div>
        );
    return(
        <div style={{ display: "flex", flexDirection: "column", overflowX: "scroll", overflowY: "scroll", width: "calc(100vw - 300px)", height: "calc(100vh - 30px)" }}>
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
                                        <span style={{ marginLeft: "10px", marginRight: "5px" }}>{c.Name}</span>
                                        {
                                            c.NameMetric &&
                                            <span>{c.NameMetric}</span>
                                        }
                                        <input value={c.Value} style={{ width: "100px" }} />
                                        {
                                            c.Primitives && <span>Primitives</span>
                                        }
                                        {
                                            c.Primitives && c.Primitives.map((p: any) =>
                                                <>
                                                    <span>{p.Name}</span>
                                                    <input value={c.Value} style={{ width: "100px" }} />
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
    );
}

const mapStateToProps = (state: any) => ({
    Metrics: state.Profile
});

export default connect(mapStateToProps)(ProfileForm);