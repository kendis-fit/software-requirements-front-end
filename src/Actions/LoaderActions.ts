import { LOAD_PROFILE, LOAD_REQUIREMENTS } from "../Constants/Actions";

export const LoadProfile = (isLoad: boolean) => {
    return {
        type: LOAD_PROFILE,
        value: isLoad
    }
}

export const LoadRequirements = (isLoad: boolean) => {
    return {
        type: LOAD_REQUIREMENTS,
        value: isLoad
    }
}