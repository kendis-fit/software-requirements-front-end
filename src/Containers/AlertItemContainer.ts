import { connect } from "react-redux";

import AlertItem from "../Components/Alert/AlertItem";

import { RemoveAlert } from "../Actions/AlertActions";

const mapDispatchToProps = (dispatch: any) => ({
    RemoveAlert: (id: number) => dispatch(RemoveAlert(id))
})

export default connect(null, mapDispatchToProps)(AlertItem);