import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render () {
    const { users, userCount } = this.props
    return (
      <div>
        <h1>Total number of users {userCount} </h1>
        <ul>
          { users.map(user => <li key={user.username}>{user.username}</li>) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    users: state.users,
    userCount: state.users.length
  }
)

export default connect(mapStateToProps)(Users)
