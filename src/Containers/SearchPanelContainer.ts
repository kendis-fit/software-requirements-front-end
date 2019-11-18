import { connect } from "react-redux";

import SearchPanel from "../Components/LeftPanel/SearchPanel";

import { SearchRequirement } from "../Actions/RequirementActions";

const mapDispatchToProps = (dispatch: any) => ({
    SearchRequirement: (search: string) => dispatch(SearchRequirement(search))
})

export default connect(null, mapDispatchToProps)(SearchPanel);