import React from "react";
import { connect } from "react-redux";

import { Block } from "../Styles/Block";
import { Input } from "../Styles/Input";
import { Wrapper } from "../Styles/Wrapper";

import ETypeColor from "../../Constants/Enumerations/ETypeColor";
import { SearchRequirement } from "../../Actions/RequirementActions";

interface ISearchPanel
{
    SearchRequirement: (search: string) => void;
}

const SearchPanel = ({ SearchRequirement }: ISearchPanel) => {
    return(
        <Block Height="55px" Type={ETypeColor.PRIMARY}>
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

const mapDispatchToProps = (dispatch: any) => ({
    SearchRequirement: (search: string) => dispatch(SearchRequirement(search))
})

export default connect(null, mapDispatchToProps)(SearchPanel);