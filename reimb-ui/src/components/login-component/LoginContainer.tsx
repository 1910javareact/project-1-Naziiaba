import { connect } from "react-redux"; 
import { LoginComponent } from "./LoginComponent"
import { IState } from "../../reducers";
import { svLogin } from '../../action-mappers/login-action-mappers'



const mapStateToProps = (state: IState) => {
    
    return {
        user: state.login.user
    }
}


const mapDispatchToProps = {
    svLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)