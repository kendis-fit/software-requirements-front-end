import { combineReducers } from "redux";

import Menu from "./Menu";
import Alerts from "./Alerts";
import Profile from "./Profile";
import Requirement from "./Requirement";
import Requirements from "./Requirements";
import SearchRequirement from "./SearchRequirement";

export default combineReducers({
    Menu,
    Alerts,
    Profile,
    Requirement,
    Requirements,
    SearchRequirement
});