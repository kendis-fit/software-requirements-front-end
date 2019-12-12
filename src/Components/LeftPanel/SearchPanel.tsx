import React from "react";

import { Block } from "../Styles/Block";
import { Input } from "../Styles/Input";
import { Wrapper } from "../Styles/Wrapper";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";

interface ISearchPanel
{
    SearchRequirement: (search: string) => void;
}

const SearchPanel = ({ SearchRequirement }: ISearchPanel) => {
    return(
        <Block Height="55px" Type={ETypeColor.PRIMARY} Width="100%">
            <Wrapper Top="10px" Left="20px">
                <Block Type={ETypeColor.WHITE} Height="35px" Width="210px" Rounde="3px">
                    <Wrapper Top="2px">
                        <Input onChange={e => SearchRequirement(e.target.value)} placeholder="Enter a requirement" />
                    </Wrapper>
                </Block>
            </Wrapper>
        </Block>
    );
}

export default SearchPanel;