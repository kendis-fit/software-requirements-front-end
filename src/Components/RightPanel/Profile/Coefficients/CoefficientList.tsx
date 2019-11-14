import React from "react";

import CoefficientItem from "./CoefficientItem";

import ICoefficient from "../../../../Interfaces/Profile/ICoefficient";

interface ICoefficientList
{
    Coefficients: Array<ICoefficient>;
}

const CoefficientList = ({ Coefficients }: ICoefficientList) => {
    return(
        <>
            {
                Coefficients.map(c => <CoefficientItem Name={c.Name} NameMetric={c.NameMetric} Primitives={c.Primitives} Value={c.Value} />)
            }        
        </>
    );
}

export default CoefficientList;