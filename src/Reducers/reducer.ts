import { combineReducers } from "redux";

import Menu from "./Menu";
import Profile from "./Profile";
import Requirement from "./Requirement";
import Requirements from "./Requirements";

export default combineReducers({
    Menu,
    Profile,
    Requirement,
    Requirements
});