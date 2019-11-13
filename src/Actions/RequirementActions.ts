import { SET_REQUIREMENT } from "../Constants/Actions";

export const SetRequirement = (id: number) => {
    return {
        type: SET_REQUIREMENT,
        value: id
    }
}