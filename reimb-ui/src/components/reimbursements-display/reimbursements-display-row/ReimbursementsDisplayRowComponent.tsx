import React from 'react'
import { Reimbursement } from '../../../models/reimbursement'


interface IReimbursementsDisplayRowProps{
    user: Reimbursement
    
}

export const ReimbursementsDisplayRowComponent: React.FC<IReimbursementsDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.user.reimbursementId}</td>
            <td>{props.user.author}</td>
            <td>{props.user.amount}</td>
            <td>{props.user.dateSubmitted}</td>
            <td>{props.user.dateResolved}</td>
            <td>{props.user.description}</td>
            <td>{props.user.resolver}</td>
            <td>{props.user.status}</td>
            <td>{props.user.type}</td>
        </tr>
    )
}