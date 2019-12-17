import React from 'react'
import { Table } from 'reactstrap';
import { RouteComponentProps, Redirect } from "react-router";
// import { getReimbursementsById } from '../../remote/sv-clients/sv-reimbursement';
import { Reimbursement } from '../../models/reimbursement';
// import { ReimbursementsDisplayRowComponent } from './reimbursements-display-row/ReimbursementsDisplayRowComponent';



interface IReimbursementsDisplayProps extends RouteComponentProps{
    reimbursement: Reimbursement
}

interface IReimbursementsDisplayState{
    reimbursement: Reimbursement
}

// export class ReimbursementsDisplayComponent extends React.Component<any, IReimbursementsDisplayState>{
   
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             reimbursement: 
//         }
//     }

//     async componentDidMount() {
//         try {
//             let u = await getReimbursementsById()
//             if (u.status === 200) {
//                 this.setState({
//                     ...this.state,
//                     getReimbursementsById: u.body
//                 })
//             }
//         } catch (e) {
//             console.log(e);

//         }
//     }

//     render() {
//         let rows = this.state.getReimbursementsById.map((e) => {
//             return <ReimbursementsDisplayRowComponent user={e} key={'reimbursements ' + e.userId} />
//         })
//         return (
//             this.props.user.userId ?
//                 <div>
//                     <Table bordered color='danger'>
//                         <thead>
//                             <tr>
//                                 <td>Reimbursement ID</td>
//                                 <td>Author</td>
//                                 <td>Amount</td>
//                                 <td>Submittion Date</td>
//                                 <td>Resolved Date</td>
//                                 <td>Description</td>
//                                 <td>Status</td>
//                                 <td>Type</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {rows}
//                         </tbody>
//                     </Table>
//                 </div>
//                 :
              
//                 <Redirect to='/login'/>
//         )
//     }
// }