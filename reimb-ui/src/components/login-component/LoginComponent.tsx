import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user'
import { Form, FormGroup, Label, Input, Button, Row, Col, Jumbotron } from "reactstrap";

interface ILoginComponentProps {
    user: User
    oLogin: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.oLogin(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                
            
                {/* <Button color='primary'>Login</Button> */}
                </Col>
                
                </Row>
                
            </Form>
            <p> {this.props.user.username}</p>
            </Jumbotron>
        </div>
        )
    }
}

{/* <input style={{backgroundColor: 'blue'}} type="text" /> */}