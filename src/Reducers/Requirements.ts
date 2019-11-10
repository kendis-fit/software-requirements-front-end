import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";
import { ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../Constants/Actions";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

type ActionType = 
    | Action<'ADD_REQUIREMENT', { value: IFullRequirement }>
    | Action<'REMOVE_REQUIREMENT', { value: Number }>

const Requirements = (state: any = [], action: ActionType) => {
    switch (action.type)
    {
        case ADD_REQUIREMENT:
            const value = action.value as IFullRequirement;
            if (!value.ParentId)
                state.Requirements.push(value.Requirement);
            else
                addRequirement(state.Requirements, value.ParentId, value.Requirement);
            return { ...state, Requirements: [...state.Requirements] };
        case REMOVE_REQUIREMENT:
            const id = action.value as Number;
            removeRequirement(state.Requirements, id);
            return { ...state, Requirements: [...state.Requirements] };
        default:
            return state;
    }
}

function addRequirement(requirements: Array<IRequirement>, parentId: Number, requirement: IRequirement) {

    for (let node of requirements) {
        if (node.Id === parentId) {
            node.Requirements.push(requirement);
        } else if (node.Requirements.length > 0) {
            addRequirement(node.Requirements, parentId, requirement);
        }
    }
}

function removeRequirement(requirements: Array<IRequirement>, id: Number) {

    requirements.forEach((r, i) => {
        if (r.Id === id)
            requirements.splice(i, 1);
        else if (r.Requirements.length > 0)
            removeRequirement(r.Requirements, id);
    });
}

export default Requirements;