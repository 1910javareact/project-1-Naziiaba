
import React, { SyntheticEvent } from 'react'
import { oRemoteSubmitReimbursement } from '../../remote/orion-clients/orion-reimbursement'
import { Form, FormGroup, Input, Button } from 'reactstrap'


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
        try {
            let s = await oRemoteSubmitReimbursement(this.state.author, this.state.amount, this.state.dateSubmitted, this.state.dateResolved, this.state.description, this.state.resolver, this.state.status, this.state.type)
            if (s.status === 201) {
                this.setState({
                    ...this.state,
                    sumbitted: 'Submit was successful'
                })
            } else {
                this.setState({
                    ...this.state,
                    sumbitted: s.status
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h2>Update Reimbursement</h2>
                <Form onSubmit={this.submitReimbursement} className="updateComponent">
                   


                    <div id="wrapper">
  <header>
    <div className="container">
      <table>
        <tbody>
          <tr>
          <td>
              <button type="submit" className="btn">
              Author:
              </button>
            </td>
            <td>
            <Input type="text" name="author" id="author" onChange={this.updateAuthor} />
            </td>
            </tr>
            
            <tr>
            <td>
              <button type="submit" className="btn">
                Amount:
              </button>
            </td>
            <td>
            <Input type="text" name="author" id="author" onChange={this.updateAmount} />
            </td>
          </tr>
          
          <tr>
            <td>
              <button type="submit" className="btn">
              Type:
              </button>
            </td>
            <td>
            <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
            </td>
          </tr>

          <tr>
            <td>
              <button type="submit" className="btn">
              Status:
              </button>
            </td>
            <td>
            <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
            </td>
          </tr>

          <tr>
            <td>
              <button type="submit" className="btn">
              Description:
              </button>
            </td>
            <td>
            <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
            </td>
          </tr>


          <tr>
            <td>
              <button type="submit" className="btn">
              Resolver:
              </button>
            </td>
            <td>
            <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
            </td>
          </tr>


          <tr>
            <td>
              <button type="submit" className="btn">
              Date Submitted:
              </button>
            </td>
            <td>
            <Input type="text" name="dateSubmitted" id="dateSubmitted" onChange={this.updateDateSubmitted} />
            </td>
          </tr>

          <tr>
            <td>
              <button type="submit" className="btn">
              Date Resolved:
              </button>
            </td>
            <td>
            <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
            </td>
          </tr>

         </tbody>
         </table>
        </div>
     </header>
        </div>


                        {/* <Label for="author">Author:</Label>
                        <Input type="text" name="author" id="author" onChange={this.updateAuthor} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="amount">Amount:</Label>
                        <Input type="text" name="amount" id="amount" onChange={this.updateAmount} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dateSubmitted">Date Submitted:</Label>
                        <Input type="text" name="dateSubmitted" id="dateSubmitted" onChange={this.updateDateSubmitted} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="dateResolved">Date Resolved:</Label>
                        <Input type="text" name="dateResolved" id="dateResolved" onChange={this.updateDateResolved} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description:</Label>
                        <Input type="text" name="description" id="description" onChange={this.updateDescription} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="resolver">Resolver:</Label>
                        <Input type="text" name="resolver" id="resolver" onChange={this.updateResolver} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="status">Status:</Label>
                        <Input type="text" name="status" id="status" onChange={this.updateStatus} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="type">Type:</Label>
                        <Input type="text" name="type" id="type" onChange={this.updateType} />
                    </FormGroup> */}

                    <br />
                    
                    <Button type="submit" color="warning">Submit</Button>
                    
                </Form>
            </div>
        )
    }
}

