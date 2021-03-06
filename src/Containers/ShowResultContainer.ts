import { connect } from "react-redux";

import ShowResult from "../Components/PopUpWindows/ShowResult";

import IRootState from "../Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
	Requirement: state.Requirement
});

export default connect(mapStateToProps, null)(ShowResult);