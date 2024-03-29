import React from 'react'
import { User } from '../../models/user'
import { UsersRowComponent } from './users-row/UsersRowComponent'
import { getAllUsers } from '../../remote/orion-clients/orion-user'
import { Table } from 'reactstrap'

interface IAllUsersState {
    allUsers: User[]
}

export class AllUsersComponent extends React.Component<any, IAllUsersState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let g = await getAllUsers()
            if (g.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: g.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}