import React from 'react'
import { User } from '../../models/user';
import { Table } from 'reactstrap';
import { RouteComponentProps, Redirect } from "react-router";
import { getAllUsers } from '../../remote/sv-clients/sv-user';
import { UsersDisplayRowComponent } from './users-display-row/UsersDisplayRowComponent'


interface IUsersDisplayProps extends RouteComponentProps{
    user:User
}

interface IUsersDisplayState{
    allUsers: User[]
}

export class UsersDisplayComponent extends React.Component<any, IUsersDisplayState>{
   
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let u = await getAllUsers()
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: u.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersDisplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            this.props.user.userId ?
                <div>
                    <Table bordered color='danger'>
                        <thead>
                            <tr>
                                <td>User ID</td>
                                <td>Username</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Role</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
              
                <Redirect to='/login'/>
        )
    }
}