import React, {Component} from 'react';
import {connect} from "react-redux";

class Users extends Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.users.map((user, index) => {
                            return <li key={index}>Name: {user.username}, City: {user.hometown}</li>
                        })
                    }
                </ul>
                <p>{this.props.users.length}</p>
            </div>
        )
    }
}

//add mapStateToProps here
const mapStateToProps = (state) => ({users: state.users});
export default connect(mapStateToProps)(Users);
