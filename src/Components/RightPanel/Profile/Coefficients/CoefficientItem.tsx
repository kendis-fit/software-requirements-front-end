import React from "react";

import PrimitiveList from "./Primitives/PrimitiveList";
import { TextUnderline, TextSpace } from "../../../Styles/Text";

import ICoefficient from "../../../../Interfaces/Profile/ICoefficient";

interface ICoefficientItem extends ICoefficient
{
    Id: number;
    IndexId: number;
}

const CoefficientItem = ({ Id, IndexId, NameMetric, Name, Primitives, Value }: ICoefficientItem) => {
    return(
        <>
            {
                NameMetric ?
                <>
                    <TextSpace id={`coefficient_name_metric_${IndexId}_${Id}`} >{NameMetric}</TextSpace>
                    <TextSpace>
                        <TextUnderline id={`coefficient_name_${IndexId}_${Id}`}>{Name}</TextUnderline>
                    </TextSpace>
                </>
                :
                <TextSpace id={`coefficient_name_${IndexId}_${Id}`}>{Name}</TextSpace>
            }
            <input id={`coefficient_value_${IndexId}_${Id}`} readOnly={Primitives ? true : false} value={Value ? Value : undefined} />
            {
                Primitives && 
                <>
                    <TextSpace>Primitives</TextSpace>
                    <PrimitiveList IndexId={IndexId} CoefficientId={Id} Primitives={Primitives} />
                </>
            }
        </>
    );
}

export default CoefficientItem;