import React from "react";

import { Text as TextArea } from "../../Styles/Text";
import { BlockCenter } from "../../Styles/Block";

interface IIndexEmpty
{
    Text: string;
}

const IndexesEmpty = ({ Text }: IIndexEmpty) => {
    return(
        <BlockCenter>
            <TextArea Size="172px">{Text}</TextArea>
        </BlockCenter>
    );
}

export default IndexesEmpty;