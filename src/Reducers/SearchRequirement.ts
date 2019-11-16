import { SEARCH_REQUIREMENT } from "../Constants/Actions";

import Action from "../Constants/Types/ActionReducer";

type ActionType = 
    | Action<'SEARCH_REQUIREMENT', { value: string }>

const SearchRequirement = (state: string = "", action: ActionType) => {
    switch (action.type)
    {
        case SEARCH_REQUIREMENT:
            return action.value;
        default:
            return state;
    }
}

export default SearchRequirement;