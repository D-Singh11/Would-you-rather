import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUserAction } from '../actions/authedUser';

class Login extends Component {

    /**
   * @description Function is called when user selects the user name
   * from the provided list of usernames to login to application.
   * Internally calls dispatch() function of redux store with setAuthedUserAction
   * action to log in as selected user.
   * @param {event} event
   */
    handleChange = (event) => {
        event.preventDefault();
        this.props.dispatch(setAuthedUserAction(event.target.value));
    };

    /**
    * @description Renders the Login component to DOM 
    */
    render() {
        return (
            <div className='row container'>
                <h1>Login page</h1>
                <div className="card small col s6 offset-s3">
                    <label className='text-blue'>Login as :</label>
                    <select onChange={this.handleChange} className='browser-default'>
                        <option value="" defaultValue>Choose your username</option>
                        <option value="sarahedo"
                            data-icon="https://tylermcginnis.com/would-you-rather/sarah.jpg">
                            Sarah edo
                            </option>
                        <option value="tylermcginnis"
                            data-icon="https://tylermcginnis.com/would-you-rather/tyler.jpg">
                            Tyler Mcginnis
                            </option>
                        <option value="johndoe"
                            data-icon="https://tylermcginnis.com/would-you-rather/dan.jpg">
                            John Doe
                            </option>
                    </select>
                    <button className="btn-large waves-effect waves-light right" type="submit" name="action">
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

/**
* @description connect() used to connect Login component to store and to use
its dispatch()
@param {Component} Login
@returns {Component} ConnectedComponent
*/
export default connect()(Login);
