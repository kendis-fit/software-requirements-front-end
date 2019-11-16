import { combineReducers } from "redux";

import Menu from "./Menu";
import Profile from "./Profile";
import Requirement from "./Requirement";
import Requirements from "./Requirements";
import SearchRequirement from "./SearchRequirement";

export default combineReducers({
    Menu,
    Profile,
    Requirement,
    Requirements,
    SearchRequirement
});