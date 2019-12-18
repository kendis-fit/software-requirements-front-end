import IFullRequirement from "../Interfaces/IFullRequirement";
import IChangeStatusModify from "../Interfaces/IChangeStatusModify";
import { ADD_REQUIREMENT, REMOVE_REQUIREMENT, UPDATE_STATUS_MODIFY } from "../Constants/Actions";

export const AddRequirement = (requirement: IFullRequirement) => ({
    type: ADD_REQUIREMENT,
    value: requirement
});

export const RemoveRequirement = (id: Number) => ({
    type: REMOVE_REQUIREMENT,
    value: id
});

export const UpdateStatusModify = (status: IChangeStatusModify) => ({
    type: UPDATE_STATUS_MODIFY,
    value: status
});