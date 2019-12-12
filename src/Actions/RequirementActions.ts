import { SET_REQUIREMENT, SEARCH_REQUIREMENT } from "../Constants/Actions";

export const SetRequirement = (id: number | null) => ({
    type: SET_REQUIREMENT,
    value: id
})

export const SearchRequirement = (search: string) => ({
    type: SEARCH_REQUIREMENT,
    value: search
})