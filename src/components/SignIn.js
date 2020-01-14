import React, {Component} from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            password:""
        }
    }

    handleChange = e => {
        e.preventDefault()
        // console.log(e);
        
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        axios("https://shielded-mesa-36213.herokuapp.com/api/login", {
            method: 'post',
            data:  {user: this.state},
            withCredentials: true
        })
        .then(r=>{
            console.log(r);
            this.props.history.push('/')
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    render(){
        return(
        <div>
           <Container>
                <Form>
                    <FormGroup>
                        <Label>
                            Username
                        </Label>
                        <Input 
                            name= {'username'}
                            value={this.state.username} 
                            placeholder = {'Enter your username'}
                            onChange = {e => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Password
                        </Label>
                        <Input 
                            type="password"
                            name= {'password'}
                            value={this.state.password} 
                            placeholder = {'Enter your password'}
                            onChange = {e => this.handleChange(e)}
                        />
                    </FormGroup>
                    <Button 
                        onClick= {this.handleSubmit}>    
                        Sign In
                    </Button>
                </Form>
           </Container>
        </div>
        )
    }
}

