import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";
import { ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../Constants/Actions";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

const initialState: Array<IRequirement> = new Array<IRequirement>();

type ActionType = 
    | Action<'ADD_REQUIREMENT', { value: IFullRequirement }>
    | Action<'REMOVE_REQUIREMENT', { value: Number }>

const Requirements = (state: Array<IRequirement> = initialState, action: ActionType) => {
    switch (action.type)
    {
        case ADD_REQUIREMENT:
            const value = action.value as IFullRequirement;
            if (value.ParentId === null) // value is project and isn't requirement
            {
                state.push(value.Requirement);
            }
            else
            {
                addRequirement(state, value.ParentId, value.Requirement);
            }
            console.log(state);
            return [ ...state ];
        case REMOVE_REQUIREMENT:
            const id = action.value as Number;
            removeRequirement(state, id);
            return [ ...state ];
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