import React from "react";

import { TextSpace } from "../../../../Styles/Text";

import IPrimitive from "../../../../../Interfaces/Profile/IPrimitive";

interface IPrimitiveItem extends IPrimitive
{
    Id: number;
    IndexId: number;
    CoefficientId: number;
}

const PrimitiveItem = ({ IndexId, CoefficientId, Id, Name, Value }: IPrimitiveItem) => {
    return(
        <>
            <TextSpace id={`primitive_name_${IndexId}_${CoefficientId}_${Id}`}>{Name}</TextSpace>
            <input id={`primitive_value_${IndexId}_${CoefficientId}_${Id}`} value={Value ? Value : undefined} />
        </>
    );
}

export default PrimitiveItem;