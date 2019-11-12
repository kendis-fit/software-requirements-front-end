import React from "react";
import { connect } from "react-redux";

import IProfile from "../../../Interfaces/IProfile"
import { Text } from "../../Styles/Text";

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
        <div style={{ display: "flex", flexDirection: "column" }}>
            {
                Metrics.map(p => 
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span>{p.NameIndex} </span>
                        <span>{p.Name}: </span>
                        {
                            p.Coefficients.length > 0 &&
                            p.Coefficients.map(c => 
                                <div>
                                    <span>{c.Name}</span>
                                    <input value={c.Value} />       
                                </div>
                            )
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