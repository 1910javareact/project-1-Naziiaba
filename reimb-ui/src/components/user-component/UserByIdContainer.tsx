import { IState } from "../../reducers";
import { oUserById } from "../../action-mappers/user-by-id-action-mapper"
import { connect } from "react-redux";
import { UserByIdComponent } from "./UserByIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.userById.user
    }
}

const mapDispatchtoProps = {
    oUserById
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserByIdComponent)