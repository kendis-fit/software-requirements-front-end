import Action from "../Constants/Types/ActionReducer";
import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";

import { ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../Constants/Actions";

import { AddRequirement, RemoveRequirement } from "../Utils/RequirementAlgorithms";

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
                AddRequirement(state, value.ParentId, value.Requirement);
            }
            return [ ...state ];
        case REMOVE_REQUIREMENT:
            const id = action.value as Number;
            RemoveRequirement(state, id);
            return [ ...state ];
        default:
            return state;
    }
}


export default Requirements;