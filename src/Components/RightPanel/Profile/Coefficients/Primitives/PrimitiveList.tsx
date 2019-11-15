import React from "react";

import PrimitiveItem from "./PrimitiveItem";

import IPrimitive from "../../../../../Interfaces/Profile/IPrimitive";

interface IPrimitiveList
{
    IndexId: number;
    CoefficientId: number;
    Primitives: Array<IPrimitive>;
}

const PrimitiveList = ({ IndexId, CoefficientId, Primitives }: IPrimitiveList) => {
    return(
        <>
            {
                Primitives.map((p, i) => <PrimitiveItem key={i} IndexId={IndexId} CoefficientId={CoefficientId} Id={i} Name={p.Name} Value={p.Value} />)
            }
        </>
    );
}

export default PrimitiveList;