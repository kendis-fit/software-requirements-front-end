import IFullRequirement from "../Interfaces/IFullRequirement";
import { ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../Constants/Actions";

export const AddRequirement = (requirement: IFullRequirement) => {
    return {
        type: ADD_REQUIREMENT,
        value: requirement
    }
}

export const RemoveRequirement = (id: Number) => {
    return {
        type: REMOVE_REQUIREMENT,
        value: id
    }
}