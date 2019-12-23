
import React, { SyntheticEvent } from 'react'
import { oRemoteSubmitReimbursement } from '../../remote/orion-clients/orion-reimbursement'

export class ReimbursementUpdateComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            author: 0,
            amount: 0,
            dateSubmitted: 0,
            dateResolved: 0,
            description: '',
            resolver: 0,
            status: 0,
            type: 0
        }
    }
    updateAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }
    updateAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }
    updateDateSubmitted = (e: any) => {
        this.setState({
            ...this.state,
            dateSubmitted: e.target.value
        })
    }
    updateDateResolved = (e: any) => {
        this.setState({
            ...this.state,
            dateResolved: e.target.value
        })
    }
    updateDescription = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    updateResolver = (e: any) => {
        this.setState({
            ...this.state,
            resolver: e.target.value
        })
    }
    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }
    updateType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }
    submitReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()


