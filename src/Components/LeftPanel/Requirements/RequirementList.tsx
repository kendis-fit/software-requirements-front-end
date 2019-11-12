import React from "react";
import { connect } from "react-redux";

import RequirementItem from "./RequirementItem";

import IRequirement from "../../../Interfaces/IRequirement";
import { Text } from "../../Styles/Text";
import { Wrapper } from "../../Styles/Wrapper";

interface IRequirementList
{
    ParentId?: number;
    Requirements: Array<IRequirement>;
    Level?: number;
}

const RequirementList = ({ Requirements, ParentId, Level = 1 }: IRequirementList) => {
    return(
        <>
            {
                Requirements && Requirements.length > 0 ? 
                Requirements.map((r, i) =>
                    <>
                    <RequirementItem key={i} Id={r.Id} ParentId={ParentId} Name={r.Name} Level={ParentId ? Level : Level + 1}></RequirementItem>
                    {
                        r.Requirements && r.Requirements.length > 0 &&
                        <RequirementList Requirements={r.Requirements} ParentId={r.Id} Level={Level + 1}></RequirementList>
                    }
                    </>
                ) 
                :
                <Wrapper Top="200px" style={{ textAlign: "center" }}>
                    <Text Size="72px">Empty</Text>
                </Wrapper>
            }
        </>
    );
}

const mapStateToProps = (state: any) => ({
    Requirements: state.Requirements    
});

export default connect(mapStateToProps)(RequirementList);