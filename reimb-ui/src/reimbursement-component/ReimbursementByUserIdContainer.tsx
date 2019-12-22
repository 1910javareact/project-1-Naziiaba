import { IState } from "../../reducers";
import { oReimbursementInfo } from "../../action-mappers/reimbursement-info-action-mapper"
import { connect } from "react-redux";
import { ReimbursementByUserIdComponent } from "./ReimbursementByUserIdComponent";

const mapStateToProps = (state: IState) => {
    return {
        reimbursement: state.reimbursementInfo.reimbursement
    }
}

const mapDispatchtoProps = {
    oReimbursementInfo
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReimbursementByUserIdComponent)