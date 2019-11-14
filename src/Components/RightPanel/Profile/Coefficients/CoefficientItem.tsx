import React from "react";

import PrimitiveList from "./Primitives/PrimitiveList";
import { TextUnderline, TextSpace } from "../../../Styles/Text";

import ICoefficient from "../../../../Interfaces/Profile/ICoefficient";

const CoefficientItem = ({ NameMetric, Name, Primitives, Value }: ICoefficient) => {
    return(
        <>
            {
                NameMetric ?
                <>
                    <TextSpace>{NameMetric}</TextSpace>
                    <TextSpace>
                        <TextUnderline>{Name}</TextUnderline>
                    </TextSpace>
                </>
                :
                <TextSpace>{Name}</TextSpace>
            }
            <input readOnly={Primitives ? true : false} value={Value ? Value : undefined} />
            {
                Primitives && 
                <>
                    <TextSpace>Primitives</TextSpace>
                    <PrimitiveList Primitives={Primitives} />
                </>
            }
        </>
    );
}

export default CoefficientItem;