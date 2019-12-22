import { IState } from "../../reducers";
import { oLogin } from "../../action-mappers/login-action-mappers"
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    oLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)