import React from "react";

import PrimitiveItem from "./PrimitiveItem";

import IPrimitive from "../../../../../Interfaces/Profile/IPrimitive";

interface IPrimitiveList
{
    Primitives: Array<IPrimitive>;
}

const PrimitiveList = ({ Primitives }: IPrimitiveList) => {
    return(
        <>
            {
                Primitives.map(p => <PrimitiveItem Name={p.Name} Value={p.Value} />)
            }
        </>
    );
}

export default PrimitiveList;