import React from "react";

import { TextUnderline, TextSpace } from "../../Styles/Text";

interface IIndex
{
    NameIndex: string;
    Name: string;
}

const Index = ({ NameIndex, Name }: IIndex) => {
    return(
        <>
            <TextSpace>{NameIndex}</TextSpace>
            <TextSpace>
                <TextUnderline>{Name}: </TextUnderline>   
            </TextSpace>
        </>
    );
}

export default Index;