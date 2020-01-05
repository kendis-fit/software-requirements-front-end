import { connect } from "react-redux";

import IRootState from "../Interfaces/IRootState";

import PopUpMenu from "../Components/PopUpWindows/PopUpMenu";

const mapStateToProps = (state: IRootState) => ({
    Menu: state.Menu
})

export default connect(mapStateToProps)(PopUpMenu);