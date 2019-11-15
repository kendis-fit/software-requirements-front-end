import React from "react";

import CoefficientItem from "./CoefficientItem";

import ICoefficient from "../../../../Interfaces/Profile/ICoefficient";

interface ICoefficientList
{
    Id: number;
    Coefficients: Array<ICoefficient>;
}

const CoefficientList = ({ Id, Coefficients }: ICoefficientList) => {
    return(
        <>
            {
                Coefficients.map((c, i) => <CoefficientItem IndexId={Id} Id={i} key={i} Name={c.Name} NameMetric={c.NameMetric} Primitives={c.Primitives} Value={c.Value} />)
            }        
        </>
    );
}

export default CoefficientList;