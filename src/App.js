import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFormContainer from './components/SearchFormContainer'
import Navbar from './components/Navbar'
import Auth from './adapters/auth'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Login from './components/Login'
import PastOrders from './components/PastOrders'
import { Route, Redirect, Switch } from 'react-router-dom'


class App extends Component {


  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    jwt: localStorage.getItem("jwt"),
    pastOrders: [],
    login: {
      name: "",
      password: ""
    },
    signup: {
      name: "",
      password: ""
    }
  }

  // componentDidMount() {
  //   if (this.state.isLoggedIn) {
  //     this.setState({
  //       currentUser: payload.user
  //     })
  //   }
  // }

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
      .then(payload => {
        localStorage.setItem('jwt', payload.jwt)
        this.setState({
          currentUser: payload.user,
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
    this.setState({
      currentUser: {},
      isLoggedIn: false
    })
    console.log('logged out')
  }

  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(payload => {
        if (payload.error === "Not Authenticated") {
          alert("Username or Password is incorrect")
        } else {
            localStorage.setItem('jwt', payload.jwt)
            console.log("user is", payload.user)

            // user is an object with the keys from the table in database
            this.setState({
              currentUser: payload.user,
              isLoggedIn: true,
              login: {
                name: "",
                password: ""
              }
            })
          }

      })
  }

  getOrders = () => {
    const id = this.state.currentUser.id
    console.log("ID:", this.state)
    const data = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${id}`, data)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          pastOrders: json.restaurants
        })
      }
      )
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
  withLoggedIn = (WrappedComponent) => {
    if (this.state.isLoggedIn) {
      return <WrappedComponent />
    } else {
      return <Redirect to="/login" />
    }
  }

  render() {
    // const SFCWithLoggedIn = this.withLoggedIn(SearchFormContainer)

    return (
      <div className="App add-padding">
        <Navbar currentUserName={this.state.currentUser.first_name} isLoggedIn={this.state.isLoggedIn} loginUser={this.loginUser} logoutUser={this.logoutUser} getOrders={this.getOrders}/>

        {/* <Route exact path="/" render={() => this.state.isLoggedIn ? <SearchFormContainer /> : <Redirect to="/login" />}/> */}

        <Route exact path="/" render={() => this.withLoggedIn(SearchFormContainer)} />

        <Route exact path="/login" render={() => this.state.isLoggedIn ? <Redirect to="/" /> : <Login loginUser={this.loginUser} name={this.state.login.name} password={this.state.login.password} handleNameChange={this.handleLoginNameChange} handlePasswordChange={this.handleLoginPasswordChange} />} />

        <Route exact path="/signup" render={() => this.state.isLoggedIn ? <Redirect to="/" /> : <Signup name={this.state.signup.name} password={this.state.signup.password} handleNameChange={this.handleSignupNameChange} handlePasswordChange={this.handleSignupPasswordChange} signupUser={this.signupUser} />} />

        <Route exact path="/past-orders" render={() => this.state.isLoggedIn ? <PastOrders restaurants={this.state.pastOrders} /> : <Redirect to="/" />} />

        {/* <Route exact path="/login" render={() => <Login loginUser={this.loginUser} name={this.state.login.name} password={this.state.login.password} handleNameChange={this.handleLoginNameChange} handlePasswordChange={this.handleLoginPasswordChange} />} /> */}

        {/* <Signup name={this.state.signup.name} password={this.state.signup.password} handleNameChange={this.handleSignupNameChange} handlePasswordChange={this.handleSignupPasswordChange} signupUser={this.signupUser}/> */}

        {/* <Logout logoutUser={this.logoutUser} /> */}

        {/* <Login loginUser={this.loginUser} name={this.state.login.name} password={this.state.login.password} handleNameChange={this.handleLoginNameChange} handlePasswordChange={this.handleLoginPasswordChange} /> */}

        {/* <SearchFormContainer /> */}
      </div>
    );
  }
}

export default App;
