import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }   

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });    
        }    
        handleLogin(event) {
            alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
            this.toggleModal();
            event.preventDefault();
        }
        
    render () {
        return(
            <React.Fragment>
                <Navbar className="bg-dark" sticky="top" expand="md">
                    <div className="container bg-dark">
                       <NavbarBrand className=" text-light  fs-3 shadblue" href="/"><i className="fa fa-leaf"></i>Ss-Foods</NavbarBrand>
                       <NavbarToggler onCLick={this.toggleNav} />
                       <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav  className="offset-4 ">
                                <NavItem>
                                    <NavLink className="nav-link text-light shadblue" to="/home">
                                        <i className="fa fa-home fa-lg " /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light shad" to="/Info">
                                        <i className="fa fa-info-circle fa-lg" /> Info
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light shad" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                            <span className="navbar-text shadblue">
                                <Button  onClick={this.toggleModal}>
                                     Login
                                </Button>
                            </span>
                        </Collapse> 
                    </div>
              </Navbar>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )
    }
} 
export default Header;