import React from "react";

import { Block } from "../Styles/Block";
import { Image } from "../Styles/Image";
import { Input } from "../Styles/Input";
import { Wrapper } from "../Styles/Wrapper";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";

import searchImage from "../../Images/search.png";

const SearchPanel = () => {
    return(
        <Block Height="55px" Type={ETypeColor.PRIMARY}>
            <Wrapper Top="10px" Left="30px">
                <Block Type={ETypeColor.WHITE} Height="35px" Width="210px" Rounde="3px">
                    <Wrapper Top="2px">
                        <Input placeholder="Enter a requirement" />
                    </Wrapper>
                </Block>
            </Wrapper>
            <Wrapper Top="10px" Left="10px">
                <Image src={searchImage} height="40px" width="40px" alt="search icon" />
            </Wrapper>
        </Block>
    );
}

export default SearchPanel;