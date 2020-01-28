import { SET_REQUIREMENT, SET_INDEX } from "../Constants/Actions";

import IRequirementSelect from "../Interfaces/IRequirementSelect";
import Action from "../Constants/Types/ActionReducer";

const initialState: IRequirementSelect = {
    Id: null,
    Name: null,
    IsProject: null,
    Index: null,
    Write: null
};

type ActionType = 
    | Action<'SET_REQUIREMENT', { value: IRequirementSelect }>
    | Action<'SET_INDEX', { value: string }>

const Requirement = (state: IRequirementSelect = initialState, action: ActionType) => {
    switch (action.type)
    {
        case SET_REQUIREMENT:
            return action.value as IRequirementSelect;
        case SET_INDEX:
            return {...state, Index: action.value as string}
        default:
            return state;
    }
}

export default Requirement;