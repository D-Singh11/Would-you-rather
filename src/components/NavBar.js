import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" activeClassName="active">
                            Add question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">
                            Leaderboard
                        </NavLink>
                    </li>
                    <li className="right">
                        <NavLink to="/" activeClassName="active"
                            onClick={this.props.handleLogOut}>
                            LogOut
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
