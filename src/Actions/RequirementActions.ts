import { SET_REQUIREMENT, SEARCH_REQUIREMENT, SET_INDEX } from "../Constants/Actions";
import IRequirementSelect from "../Interfaces/IRequirementSelect";

export const SetRequirement = (requirement: IRequirementSelect | null) => ({
    type: SET_REQUIREMENT,
    value: requirement
})

export const SetIndex = (id: string) => ({
    type: SET_INDEX,
    value: id
})

export const SearchRequirement = (search: string) => ({
    type: SEARCH_REQUIREMENT,
    value: search
})