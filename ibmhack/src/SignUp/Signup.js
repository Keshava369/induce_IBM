import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SignUp = ({ }) => {
    const navigate = useNavigate(); 
    const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const onNameChange = (event) => {
    setSignupUsername(event.target.value);
  }

  const onEmailChange = (event) => {
    setSignupEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setSignupPassword(event.target.value);
  }

  const onSubmitRegister = () => {
    fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
        
        
      })
    }).then(response => response.json())
      .then(userData => {
        if (userData.id) {
          
          navigate('/'); // Navigate to the overview page
        }
        else{
            setSignupUsername('')
          setSignupEmail('');
          setSignupPassword('');
            if (userData==="incorrect form submission")
            {
            setErrorMessage("Please enter valid details!");
            }
        else {
          // Handle singup failure
          setErrorMessage("User already exists!");
          
          
        }
        } 
        
      }).catch(console.log)
  }

  return (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <button className='closeButton'>x</button>
          <h2 className='text'>Signup</h2>
            <label>
                Username:
                <input type="text" value={signupUsername} onChange={onNameChange}/>
            </label>
            <label>
                Email:
                <input type="text" value={signupEmail} onChange={onEmailChange} />
            </label>
            <label className='text'>
                Password:
                <input type="password" value={signupPassword} onChange={onPasswordChange} />
            </label>
            <button type="submit" className='text' onClick={onSubmitRegister}>Signup</button>
            {errorMessage && <p className="login-error-message">{errorMessage}</p>}

        </div>
      </div>

    </div>
  );
}

export default SignUp;

/*...............................*/
/*...............................*/
/*...............................*/

/*import React from 'react';
import './SignUp.css';
class SignUp extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            email: '',
            password: '', 
        }
    }

    onNameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
        }).then(response => response.json())
        .then(user => {
        if (user.id) {
            this.props.loadUser(user)
            
        }
    })
    this.props.backToHome();
}    
render () { 
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className='closeButton'>x</button>
                <h2>Signup</h2>
                
                    <label>
                        Username:
                        <input type="text"  onChange={this.onNameChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text"  onChange={this.onEmailChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password"   onChange={this.onPasswordChange}/>
                    </label>
                    <button type="submit" onClick = {this.onSubmitRegister}>Signup</button>
                
                
            </div>
        </div>
    )
}
}

export default SignUp;*/