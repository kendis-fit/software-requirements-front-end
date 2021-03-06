import React, { useState, useEffect } from "react";

import Colors from "../../../Constants/Colors";

interface ICoefficientItem
{
    UpdateProfile(value: string): void;
    Value: number | null;
    ReadOnly: boolean;
}

const Item = ({ UpdateProfile, Value, ReadOnly }: ICoefficientItem) => {

    const [value, setValue] = useState(Value || "");
    const updateProfile = (e: any) => {
        setValue(e.target.value);
        UpdateProfile(e.target.value);
    }

    useEffect(() => {
        if (Value != null) setValue(Value.toString());
    }, [Value]);
    
    return(
        <input pattern="[0-9]+(\.[0-9]+)?" style={{ width: "75px", height: "20px", border: `2px solid ${Colors.LightBlueDisabled}`, background: `${ReadOnly ? "rgb(164, 164, 164)" : ""}` }} onChange={updateProfile}
            value={value || ""} readOnly={ReadOnly} required={true} />
    );
}

export default Item;