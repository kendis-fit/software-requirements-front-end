import React, { useState } from "react";

interface ICoefficientItem
{
    UpdateProfile(value: string): void;
    Value: number | null;
    ReadOnly: boolean;
}

const CoefficientItem = ({ UpdateProfile, Value, ReadOnly }: ICoefficientItem) => {
    
    const [value, setValue] = useState(Value || "");

    const isNumber = (number: any): boolean => !Number.isNaN(number - parseFloat(number))

    const updateProfile = (e: any) => {
        setValue(e.target.value);
        if (isNumber(e.target.value)) {
            UpdateProfile(e.target.value);
        }    
    }
    
    return(
        <input pattern="[0-9]+(\.[0-9]+)?" style={{ width: "75px", height: "20px" }} onChange={updateProfile}
            value={value} readOnly={ReadOnly}  />
    );
}

export default CoefficientItem;