import React, { Component } from 'react'



 class AuthForm extends Component {
   constructor(props){
     super(props);
     this.state = {
       email: "",
       username: "",
       password:"",
       profileImageUrl:""
     }
   }

handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render() {
    const {email, username, password, profileImageUrl} = this.state;
    const { heading, buttonText, signUp } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
             <h2>{heading}</h2>
             <label htmlFor="email">Email:</label>
             <input className="form-control" id="email" 
                type="text"
                name="email"
                onChange={this.handleChange}
                value={email}
             />
             <label htmlFor="password">Password:</label>
              <input className="form-control" id="password"            type="password"
                 name="password"
                 onChange={this.handleChange}
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username:</label>
                  <input className="form-control" id="email"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input className="form-control" id="image-url" type="tex"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm;
