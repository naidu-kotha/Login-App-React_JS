/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {login: false}

  change = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state

    return (
      <div className="bg">
        <div className="card">
          <Message abc={login} />
          {login ? (
            <Logout logout={this.change} />
          ) : (
            <Login login={this.change} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
