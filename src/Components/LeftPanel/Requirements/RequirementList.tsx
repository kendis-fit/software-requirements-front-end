import React from "react";

import RequirementsEmpty from "./RequirementsEmpty";
import RequirementItemContainer from "../../../Containers/RequirementItemContainer";

import IRequirement from "../../../Interfaces/IRequirement";
import IRequirementLevel from "../../../Interfaces/IRequirementLevel";

interface IRequirementList extends IRequirementLevel
{
    Requirements: Array<IRequirement>;
}

const RequirementList = ({ Requirements, ParentId, Level }: IRequirementList) => {

    if (Requirements.length === 0 && !ParentId)
        return <RequirementsEmpty />
    return(
        <>
            {
                Requirements.map((r, i) =>
                    <>
                    <RequirementItemContainer key={i} Id={r.Id} ParentId={ParentId} Name={r.Name} Level={ParentId === undefined ? Level : Level + 1} />
                    {
                        r.Requirements && r.Requirements.length > 0 &&
                        <RequirementList Requirements={r.Requirements} ParentId={r.Id} Level={Level + 1} />
                    }
                    </>
                )
            }
        </>
    );
}

export default RequirementList;