import IRequirement from "../Interfaces/IRequirement";
import IChangeStatusModify from "../Interfaces/IChangeStatusModify";

export const AddRequirement = (requirements: IRequirement[], parentId: number, requirement: IRequirement) => {

    for (let node of requirements) {
        if (node.Id === parentId) {
            node.Requirements.push(requirement);
        } else if (node.Requirements.length > 0) {
            AddRequirement(node.Requirements, parentId, requirement);
        }
    }
}

export const RemoveRequirement = (requirements: IRequirement[], id: Number) => {

    requirements.forEach((r, i) => {
        if (r.Id === id)
            requirements.splice(i, 1);
        else if (r.Requirements.length > 0)
            RemoveRequirement(r.Requirements, id);
    });
}

export const UpdateStatusModify = (requirements: IRequirement[], status: IChangeStatusModify) => {
    for (let node of requirements) {
        if (node.Id === status.Id) {
            node.Write = status.Status;
        } else if (node.Requirements.length > 0) {
            UpdateStatusModify(node.Requirements, status);
        }
    }
}

export const SearchRequirement = (requirements: any, search: string) => {
    const searchRequirements: IRequirement[] = [];
    searchInDepth(searchRequirements, requirements, search);
    return searchRequirements;
}

const searchInDepth = (searchRequirements: IRequirement[], requirements: any, search: string) => {
    for (let requirement of requirements)
    {
        if (requirement.Name.includes(search))
        {
            searchRequirements.push(requirement);
        }
        if (requirement.Requirements.length > 0)
        {
            searchInDepth(searchRequirements, requirement.Requirements, search);
        }
    }
}