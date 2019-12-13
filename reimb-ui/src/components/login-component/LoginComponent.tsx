import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class LoginComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
            </div>
        )
    }
}
