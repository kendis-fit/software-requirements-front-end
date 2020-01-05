import { connect } from "react-redux";

import ShowDiagram from "../Components/PopUpWindows/ShowDiagram";

import IRootState from "../Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
	Requirement: state.Requirement
});

export default connect(mapStateToProps, null)(ShowDiagram);