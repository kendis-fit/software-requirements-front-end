import React from "react";

import { TextUnderline, TextSpace } from "../../Styles/Text";

interface IIndex
{
    Id: number;
    NameIndex: string;
    Name: string;
}

const Index = ({ Id, NameIndex, Name }: IIndex) => {
    return(
        <>
            <TextSpace id={`index_name_index_${Id}`}>{NameIndex}</TextSpace>
            <TextSpace>
                <TextUnderline id={`index_name_${Id}`}>{Name}</TextUnderline>
                <span>:</span>   
            </TextSpace>
        </>
    );
}

export default Index;