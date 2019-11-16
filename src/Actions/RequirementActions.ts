import { SET_REQUIREMENT } from "../Constants/Actions";

export const SetRequirement = (id: number | null) => ({
    type: SET_REQUIREMENT,
    value: id
})