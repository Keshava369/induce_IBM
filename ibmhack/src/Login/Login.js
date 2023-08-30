import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = ({ }) => {
    const navigate = useNavigate(); 
  const [logInEmailorUsername, setLogInEmailorUsername] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const onEmailChange = (event) => {
    setLogInEmailorUsername(event.target.value);
  }

  const onPasswordChange = (event) => {
    setLogInPassword(event.target.value);
  }

  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usernameoremail: logInEmailorUsername,
        password: logInPassword,
      })
    }).then(response => response.json())
      .then(userData => {
        if (userData.id) {
          
          navigate('/home'); // Navigate to the home page
        } else {
          // Handle login failure
          setErrorMessage("Wrong credentials!");
          setLogInEmailorUsername('');
          setLogInPassword('');
        }
      }).catch(console.log)
  }

  return (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <button className='closeButton'>x</button>
          <h2 className='text'>Login</h2>
          <label>
            Email or Username:
            <input type="text" value={logInEmailorUsername} onChange={onEmailChange} />
          </label>
          <label className='text'>
            Password:
            <input type="password" value={logInPassword} onChange={onPasswordChange} />
          </label>
          <button type="submit" className='text' onClick={onSubmitSignIn}>Login</button>
          {errorMessage && <p className="login-error-message">{errorMessage}</p>}

        </div>
      </div>

    </div>
  );
}

export default Login;


/*import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            logInEmailorUsername: '',
            logInPassword: '', 
        }
    }

    onEmailChange = (event) => {
        this.setState({logInEmailorUsername: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({logInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                usernameoremail: this.state.logInEmailorUsername,
                password: this.state.logInPassword,
            })
        }).then(response => response.json())
        .then(userData => {
            if(userData.id){
                this.props.loadUser(userData)
                this.props.goToMainPage();
            }
            else{

            }
        }).catch(console.log)
        
    }  
 render () {
    return (
        <div>
        
        <div className="popup">
            <div className="popup-inner">
                <button className='closeButton'>x</button>
                <h2 className='text'>Login</h2>
                

                    <label>
                        Email or Username:
                        <input type="text"  onChange={this.onEmailChange}/>
                    </label>
                    <label className='text'>
                        Password:
                        <input type="password" onChange={this.onPasswordChange}/>
                    </label >
                    <button type="submit" className='text' onClick = {this.onSubmitSignIn}>Login</button>
                
            </div>
        </div>
        </div>
    )
}
}

export default Login;*/

