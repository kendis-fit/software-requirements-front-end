import IAlert from "../Interfaces/IAlert";
import { ADD_ALERT, REMOVE_ALERT } from "../Constants/Actions";

export const AddAlert = (notify: IAlert) => ({
    type: ADD_ALERT,
    value: notify
})

export const RemoveAlert = (id: number) => ({
    type: REMOVE_ALERT,
    value: id
})