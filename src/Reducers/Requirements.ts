import Action from "../Constants/Types/ActionReducer";
import IRequirement from "../Interfaces/IRequirement";
import IFullRequirement from "../Interfaces/IFullRequirement";
import IChangeStatusModify from "../Interfaces/IChangeStatusModify";

import { ADD_REQUIREMENT, REMOVE_REQUIREMENT, UPDATE_STATUS_MODIFY } from "../Constants/Actions";

import { AddRequirement, RemoveRequirement, UpdateStatusModify } from "../Utils/RequirementAlgorithms";

const initialState: IRequirement[] = [];

type ActionType = 
    | Action<'ADD_REQUIREMENT', { value: IFullRequirement }>
    | Action<'REMOVE_REQUIREMENT', { value: Number }>
    | Action<'UPDATE_STATUS_MODIFY', { value: IChangeStatusModify }>

const Requirements = (state: IRequirement[] = initialState, action: ActionType) => {
    switch (action.type)
    {
        case ADD_REQUIREMENT:
            const value = action.value as IFullRequirement;
            
            if (value.ParentId === null) // value is project and isn't requirement
            {
                localStorage["projectId"] = value.Requirement.id;
                state.push(value.Requirement);
            }
            else
            {
                AddRequirement(state, value.ParentId, value.Requirement);
            }
            return [...state];
        case REMOVE_REQUIREMENT:
            const id = action.value as Number;
            RemoveRequirement(state, id);
            return [...state];
        case UPDATE_STATUS_MODIFY:
            const status = action.value as IChangeStatusModify;
            UpdateStatusModify(state, status);
            return [...state];
        default:
            return state;
    }
}


export default Requirements;