// import React from 'react';
// import '../../App.css';
// import Welcome from './Welcome';

// export default function SignUp() {
//   <Welcome></Welcome>
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;

// }
import React, { Component } from 'react';
import '../../App.css';
import Welcome from './Welcome';

import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class EmpRegister extends Component {

    constructor() {

        super();

        this.state = {

            orgName: '',

            empAdd: '',

            empContact: '',

            empEmail: '',

            empPass: '',

            role: 'EMPLOYER'



        }

        this.orgName = this.orgName.bind(this);
        this.empAdd = this.empAdd.bind(this);
        this.empContact = this.empContact.bind(this);
        this.empEmail = this.empEmail.bind(this);
        this.empPass = this.empPass.bind(this);
        this.EmpSignUp = this.EmpSignUp.bind(this);

    }

    orgName
        (event) {

        this.setState({ orgName: event.target.value })

    }

    empAdd
        (event) {

        this.setState({ empAdd: event.target.value })

    }
    empContact(event) {

        this.setState({ empContact: event.target.value })

    }

    empEmail(event) {

        this.setState({ empEmail: event.target.value })

    }


    empPass(event) {

        this.setState({ empPass: event.target.value })

    }

    EmpSignUp(event) {
        console.warn("Employer Register Successfully")
        fetch('http://localhost:8084/registerEmp', {

            method: 'post',

            headers: {

                'Accept': '*/*',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                orgName: this.state.orgName,
                empAdd: this.state.empAdd,
                empContact: this.state.empContact,
                empEmail: this.state.empEmail,
                empPass: this.state.empPass,
                role: this.state.role,
            })

        }).then((Response) => Response.json())

    }


    render() {
        return (

            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">

                            <Card className="mx-4">

                                <CardBody className="p-4">

                                    <Form>

                                        <div className="row" className="mb-2 pageheading">

                                            <div className="col-sm-12 btn btn-primary">

                                            Employer Register
                                            </div>

                                        </div>

                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={this.orgName} placeholder="Enter Organization Name" />

                                        </InputGroup>

                                        <InputGroup className="mb-3">

                                            <Input type="text" onChange={this.empAdd} placeholder="Enter address" />

                                        </InputGroup>

                                        <InputGroup className="mb-3">

                                            <Input type="number" onChange={this.empContact} placeholder="Enter contact" />

                                        </InputGroup>

                                        <InputGroup className="mb-4">

                                            <Input type="Email" onChange={this.empEmail} placeholder="Enter Email" />

                                        </InputGroup>

                                        <InputGroup className="mb-4">

                                            <Input type="password" onChange={this.empPass} placeholder="Enter Password" />

                                        </InputGroup>
                                        

                                        <Button onClick={this.EmpSignUp} color="success" block>Create Account</Button>

                                    </Form>

                                </CardBody>

                            </Card>

                        </Col>

                    </Row>

                </Container>

            </div>

        );

    }

}

export default EmpRegister;


