import React from 'react';
import LogIn from './LogIn';



class LogInBotton extends React.Component {

  constructor() {
    super();
    this.showForm = this.showForm.bind(this);
    this.state = {
      showLogInForm: false,
      showLogInBottom: true
    }
  }

    showForm(e) {
      e.preventDefault();
      this.setState({showLogInForm: !this.state.showLogInForm});
    }
  

  render() {
   return (
    <div className="login-botton-container">
        <div className="log-in-botton" onClick={(e) => this.showForm(e)}> Log In </div>
        {this.state.showLogInForm  && <LogIn showForm={this.showForm}/>}
     </div>

    );
  }
}

export default LogInBotton;




