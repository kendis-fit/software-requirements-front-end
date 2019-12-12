import React, { Fragment } from "react";

import RequirementsEmpty from "./RequirementsEmpty";
import RequirementItemContainer from "../../../Containers/RequirementItemContainer";

import IRequirement from "../../../Interfaces/IRequirement";
import IRequirementLevel from "../../../Interfaces/IRequirementLevel";

interface IRequirementList extends IRequirementLevel
{
    Requirements: Array<IRequirement>;
    LoadRequirements: boolean;
}

const RequirementList = ({ LoadRequirements, Requirements, ParentId, Level }: IRequirementList) => {

    if (LoadRequirements && !ParentId)
        return <span>Loading...</span>;
    if (Requirements.length === 0 && !ParentId)
        return <RequirementsEmpty />
    return(
        <>
            {
                Requirements.map((r, i) =>
                    <Fragment key={i}>
                        <RequirementItemContainer Id={r.Id} ParentId={ParentId} Name={r.Name} Level={ParentId === undefined ? Level : Level + 1} />
                        {
                            r.Requirements && r.Requirements.length > 0 &&
                            <RequirementList LoadRequirements={false} Requirements={r.Requirements} ParentId={r.Id} Level={Level + 1} />
                        }
                    </Fragment>
                )
            }
        </>
    );
}

export default RequirementList;