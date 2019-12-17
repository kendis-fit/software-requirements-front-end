import { connect } from "react-redux";

import ShowResult from "../Components/ShowResult";

const mapStateToProps = (state: any) => ({
	Requirement: state.Requirement
});

export default connect(mapStateToProps, null)(ShowResult);