import { connect } from "react-redux";

import RequirementList from "../Components/LeftPanel/Requirements/RequirementList";
import IRequirement from "../Interfaces/IRequirement";

const mapStateToProps = (state: any) => ({
    Requirements: state.SearchRequirement.length > 0 ? searchRequirement(state.Requirements, state.SearchRequirement) : state.Requirements
});

function searchRequirement(requirements: any, search: string)
{
    const searchRequirements: Array<IRequirement> = new Array<IRequirement>();
    searchF(searchRequirements, requirements, search);
    return searchRequirements;
}

function searchF(searchRequirements: Array<IRequirement>, requirements: any, search: string)
{
    for (let requirement of requirements)
    {
        if (requirement.Name.includes(search))
        {
            searchRequirements.push(requirement);
        }
        if (requirement.Requirements.length > 0)
        {
            searchF(searchRequirements, requirement.Requirements, search);
        }
    }
}

export default connect(mapStateToProps)(RequirementList);