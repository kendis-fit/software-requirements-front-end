import { connect } from "react-redux";

import PopUpMenu from "../Components/PopUpMenu";

const mapStateToProps = (state: any) => ({
    Menu: state.Menu
})

export default connect(mapStateToProps)(PopUpMenu);