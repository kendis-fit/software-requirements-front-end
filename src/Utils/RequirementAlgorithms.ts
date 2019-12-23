import IRequirement from "../Interfaces/IRequirement";
import IChangeStatusModify from "../Interfaces/IChangeStatusModify";

export const AddRequirement = (requirements: IRequirement[], parentId: number, requirement: IRequirement) => {

    for (let node of requirements) {
        if (node.id === parentId) {
            node.requirements.push(requirement);
        } else if (node.requirements.length > 0) {
            AddRequirement(node.requirements, parentId, requirement);
        }
    }
}

export const RemoveRequirement = (requirements: IRequirement[], id: Number) => {

    requirements.forEach((r, i) => {
        if (r.id === id)
            requirements.splice(i, 1);
        else if (r.requirements.length > 0)
            RemoveRequirement(r.requirements, id);
    });
}

export const UpdateStatusModify = (requirements: IRequirement[], status: IChangeStatusModify) => {
    for (let node of requirements) {
        if (node.id === status.Id) {
            node.write = status.Status;
        } else if (node.requirements.length > 0) {
            UpdateStatusModify(node.requirements, status);
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
        if (requirement.name.includes(search))
        {
            searchRequirements.push(requirement);
        }
        if (requirement.requirements.length > 0)
        {
            searchInDepth(searchRequirements, requirement.requirements, search);
        }
    }
}