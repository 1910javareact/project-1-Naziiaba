import React from 'react'
import { User, Role } from '../../models/user';
import { Table } from 'reactstrap';
import { RouteComponentProps, Redirect } from "react-router";
import { getAllUsers } from '../../remote/sv-clients/sv-user';
import { UsersDisplayRowComponent } from './users-display-row/UsersDisplayRowComponent'


interface IUsersDisplayProps extends RouteComponentProps{
    user:User
}

interface IUsersDisplayState{
    userById: User
    allUsers: User[]
    userId: any
    username: any
    firstName: any
    email: any

}

export class UsersDisplayComponent extends React.Component<any, IUsersDisplayState>{
   
    constructor(props: any) {
        super(props)
        this.state = {
            userById: new User(0, '', '', '', '', '', []),
            allUsers: [],
            userId: '',
            username: '',
            firstName: '',
            email: ''
        }
    }



    async componentDidMount() {
        try {
            let u = await getAllUsers()
            // (this.props.user.user_id)
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
            return <UsersDisplayRowComponent user={e} key={'users ' + e.userId} />
        })
        return (
            this.props.user.userId  ?
                <div>
                    <Table bordered color='danger'>
                        <thead>
                            <tr>
                                <td>User ID</td>
                                <td>Username</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
               :
              
                <Redirect to='/login/'/>
        )
    }
}