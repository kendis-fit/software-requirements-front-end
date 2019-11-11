import React from "react";
import { connect } from "react-redux";

import RequirementItem from "./RequirementItem";

import IRequirement from "../../../Interfaces/IRequirement";

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
                ) : <span>No data</span>
            }
        </>
    );
}

const mapStateToProps = (state: any) => ({
    Requirements: state.Requirements    
});

export default connect(mapStateToProps)(RequirementList);