import React from "react";

import { TextSpace } from "../../../../Styles/Text";

import IPrimitive from "../../../../../Interfaces/Profile/IPrimitive";

const PrimitiveItem = ({ Name, Value }: IPrimitive) => {
    return(
        <>
            <TextSpace>{Name}</TextSpace>
            <input value={Value ? Value : undefined} />
        </>
    );
}

export default PrimitiveItem;