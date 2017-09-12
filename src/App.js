import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFormContainer from './components/SearchFormContainer'
import Navbar from './components/Navbar'
import Auth from './adapters/auth'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Login from './components/Login'


class App extends Component {


  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    jwt: localStorage.getItem("jwt"),
    login: {
      name: "",
      password: ""
    },
    signup: {
      name: "",
      password: ""
    }
  }

  handleLoginNameChange = (event) => {
    this.setState({
      login: {
        ...this.state.login,
        name: event.target.value
      }
    })
  }

  handleLoginPasswordChange = (event) => {
    this.setState({
      login: {
        ...this.state.login,
        password: event.target.value
      }
    })
  }

  handleSignupNameChange = (event) => {
    this.setState({
      signup: {
        ...this.state.signup,
        name: event.target.value
      }
    })
  }

  handleSignupPasswordChange = (event) => {
    this.setState({
      signup: {
        ...this.state.signup,
        password: event.target.value
      }
    })
  }

  signupUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user,
          isLoggedIn: true,
          signup: {
            name: "",
            password: ""
          }
        })

      })
  }

  logoutUser = () => {
    Auth.logout()
    console.log('logged out')
  }

  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user,
          isLoggedIn: true,
          login: {
            name: "",
            password: ""
          }
        })

      })
  }

// grab and validate user on initial mount. relies on Auth.currentUser
  // componentWillMount(){
  //     if (localStorage.getItem('jwt')) {
  //      Auth.currentUser()
  //        .then(user => {
  //          if (!user.error) {
  //            console.log("fetch user");
  //            this.setState({
  //              auth: {
  //                isLoggedIn: true,
  //                user: user
  //              }
  //            })
  //          }
  //        })
  //    }
  //  }

// from class auth

  // handleButtonClick = () => {
  //   Auth.me().then(user => {
  //     console.log(user)
  //
  //   })
  //
  // }

  // render() {
  //   const AuthHome = authorize(Home)
  //   return (
  //     <div>
  //       <div>
  //         <Route path="/home" component={AuthHome}/>
  //         <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup name={this.state.signup.name} password={this.state.signup.password} handleNameChange={this.handleSignupNameChange} handlePasswordChange={this.handleSignupPasswordChange} signupUser={this.signupUser}/>
        <Logout logoutUser={this.logoutUser} />
        <Login loginUser={this.loginUser} name={this.state.login.name} password={this.state.login.password} handleNameChange={this.handleLoginNameChange} handlePasswordChange={this.handleLoginPasswordChange} />
        <SearchFormContainer />
      </div>
    );
  }
}

export default App;
