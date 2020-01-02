import { connect } from "react-redux";

import AlertList from "../Components/Alert/AlertList";

import IRootState from "../Interfaces/IRootState";

const mapStateToProps = (state: IRootState) => ({
    Alerts: state.Alerts
})

export default connect(mapStateToProps)(AlertList);