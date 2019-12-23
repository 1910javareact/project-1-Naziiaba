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
            <div className = "container1">
               <Jumbotron>
            <Form onSubmit={this.submitLogin}>
                <Row form>
                    <Col md={6}>
                <FormGroup>
                    <Label for="exampleUsername">Username</Label>
                    <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="Enter username" />
                </FormGroup>
                </Col>
               <Col md={6}>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="Enter password" />
                </FormGroup>
               
                <FormGroup check>
            <Label check>
                 <Input type="checkbox" id="checkbox2" />{' '}
                     Remember me
                 </Label>
                 
                 <Col md={10}>
                 
                 <Button type="submit" color="warning">Login</Button>
                 </Col>
            </FormGroup>
            
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

// this is how to do inline styling.
{/* <input style={{backgroundColor: 'blue'}} type="text" /> */}