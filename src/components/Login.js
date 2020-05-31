import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUserAction } from '../actions/authedUser';

class Login extends Component {

    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.props.dispatch(setAuthedUserAction(event.target.value));
    }

    render() {
        return (
            <div className='row container'>
                <h1>Login page</h1>
                <div className=" card small col s6 offset-s3">
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

export default connect()(Login);
