import React, { useState } from "react";
import { connect } from "react-redux";

import { Block } from "../Styles/Block";
import { Image } from "../Styles/Image";
import { Input } from "../Styles/Input";
import { Wrapper } from "../Styles/Wrapper";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";

import searchImage from "../../Images/search.png";
import { SearchRequirement } from "../../Actions/RequirementActions";

interface ISearchPanel
{
    SearchRequirement: (search: string) => void;
}

const SearchPanel = ({ SearchRequirement }: ISearchPanel) => {

    const [search, setSearch] = useState("");

    return(
        <Block Height="55px" Type={ETypeColor.PRIMARY}>
            <Wrapper Top="10px" Left="30px">
                <Block Type={ETypeColor.WHITE} Height="35px" Width="210px" Rounde="3px">
                    <Wrapper Top="2px">
                        <Input onChange={e => setSearch(e.target.value)} value={search} placeholder="Enter a requirement" />
                    </Wrapper>
                </Block>
            </Wrapper>
            <Wrapper Top="10px" Left="10px">
                <Image onClick={() => SearchRequirement(search)} src={searchImage} height="40px" width="40px" alt="search icon" />
            </Wrapper>
        </Block>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    SearchRequirement: (search: string) => dispatch(SearchRequirement(search))
})

export default connect(null, mapDispatchToProps)(SearchPanel);