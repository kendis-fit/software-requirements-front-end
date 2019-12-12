import { connect } from "react-redux";

import AlertList from "../Components/Alert/AlertList";

const mapStateToProps = (state: any) => ({
    Alerts: state.Alerts
})

export default connect(mapStateToProps)(AlertList);