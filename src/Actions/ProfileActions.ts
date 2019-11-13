import IProfile from "../Interfaces/Profile/IMetric";
import { SET_PROFILE } from "../Constants/Actions";

export const SetProfile = (coefficients: Array<IProfile>) => {
    return {
        type: SET_PROFILE,
        value: coefficients
    }
}