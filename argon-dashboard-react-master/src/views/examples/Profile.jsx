/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstname:'',
      lastname:'',
      password: '',
      confirmpassword: '',
    };
  }
  
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  };
  
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  };

  handleFirstNameChange = (evt) => {
    this.setState({ firstname: evt.target.value });
  };
  
  handleLastNameChange = (evt) => {
    this.setState({ lastname: evt.target.value });
  };

  handleConfirmPasswordChange = (evt) => {
    this.setState({ confirmpassword: evt.target.value });
  };
  
  handleSubmit = () => {
    const { email, firstname, lastname, password, confirmpassword } = this.state;
  }
  render() {
    const { email, firstname, lastname, password, confirmpassword } = this.state;
    const enabled =
          email.length > 0 &&
          password.length > 0 &&
          firstname.length > 0 &&
          lastname.length > 0 &&
          password == confirmpassword;

    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    
                    Icon
                    
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  
                  <div className="text-center">
                    <h3>
                      Manuel Garcia
                      <span className="font-weight-light">, 22</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Paris, France
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                     Podologue
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      ECE Paris.Lyon
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">My account</h3>
                    </Col>                    
                  </Row>
                </CardHeader>
                
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="name@example.com"
                              type="email"
                              value={this.state.email}
                              onChange={this.handleEmailChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              value={this.state.firstname}
                              onChange={this.handleFirstNameChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"                              
                              value={this.state.lastname}
                              onChange={this.handleLastNameChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Password"
                              type="password"
                              value={this.state.password}
                              onChange={this.handlePasswordChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Confirm Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Confirm Password"
                              type="password"
                              value={this.state.confirmpassword}
                              onChange={this.handleConfirmPasswordChange}
                            />
                          </FormGroup> 

                          <Button 
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        disabled={!enabled}
                        size="sm">
                        Login
                        </Button>
                        </Col>
                       
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
