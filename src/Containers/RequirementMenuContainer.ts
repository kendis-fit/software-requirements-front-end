import { connect } from "react-redux";

import RequirementMenu from "../Components/LeftPanel/Requirements/RequirementMenu";

import IMenu from "../Interfaces/IMenu";

import { ShowMenu } from "../Actions/MenuActions";

import RequirementApi from "../Api/RequirementApi";

const mapStateToProps = (state: any) => ({
    Id: state.Requirement
});

const mapDispatchToProps = (dispatch: any) => ({
    RemoveRequirement: (id: number) => dispatch(RequirementApi.RemoveRequirement(id)),
    ShowMenu: (menu: IMenu) => dispatch(ShowMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequirementMenu);