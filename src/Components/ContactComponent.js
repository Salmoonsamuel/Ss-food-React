import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
      constructor(props){
          super(props);
          this.state = {
              firstName: '',
              lastName: '',
              phoneNum: '',
              email: '',
              agree: false,
              contactType: 'By Phone',
              feedback:'',
              touched: {
                  firstName: false,
                  lastName: false,
                  phoneNum: false,
                  email: false
              }
          };
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      } 

      validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

         handleBlur = (field) => () => {
              this.setState({
              touched: {...this.state.touched, [field]: true}
        });
    }

      handleInputChange(event){
          const target = event.target;
          const name = target.name;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          
          this.setState({
              [name] : value
          });
      }

      handleSubmit(event){
          console.log("Current state is : " + JSON.stringify(this.state));
          alert("Current state is : " + JSON.stringify(this.state));
          event.preventDefault();
      }
      
      render(){
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email); 
        return (
            <div className="container">
                <div className="row text-center shadblue">
                    <div className="col">
                       <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="fw-bold bg-dark text-light">Contact Us</h2>
                        <hr />
                    </div>
                </div>
    
                <div className="row shadblue">
                    <div className="col-sm-6 text-center">
                        <h5 className="fw-bold bg-dark text-light shad">Our Address</h5>
                        <address>
                            1  Way<br />
                            Absecon, NJ 08201<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col-sm-6 text-center shad ">
                        <h5 className="fw-bold bg-dark text-light shad">Talk to us@</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-718-674-4990</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> salmoonsamuel08@gmail.com</a>
                    </div>
                </div>
                <div className="row mt-4 shadblue">
                     <div className="col-12">
                         <h2 className="fw-bold bg-dark text-light text-center">Send us your Feedback</h2>
                         <hr />
                     </div>
                     <div className="col-md-10 shad">
                         <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                        <Label htmlFor="firstName" md={2} className="fw-bold bg-dark text-light shadblue">First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstName" name="firstName"
                                                placeholder="First Name"
                                                value={this.state.firstName}
                                                invalid={errors.firstName}
                                                onBlur={this.handleBlur("firstName")}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.firstName}</FormFeedback>    
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            invalid={errors.lastName}
                                            onBlur={this.handleBlur("lastName")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastName}</FormFeedback>    
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2} className="fw-bold bg-dark text-light shadblue">Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            invalid={errors.phoneNum}
                                            onBlur={this.handleBlur("phoneNum")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.phoneNum}</FormFeedback>    
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>    
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 4, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Input>
                                    </Col>
                               </FormGroup>
                               <FormGroup row>
                                    <Label htmlFor="feedback" md={2} className="fw-bold bg-dark text-light shadblue">Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={this.state.feedback}
                                            placeholder=""
                                            onChange={this.handleInputChange}></Input>
                                    </Col>
                               </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                          </Form>
                     </div>
                </div>
            </div>
       
        );
      }

}

export default Contact;