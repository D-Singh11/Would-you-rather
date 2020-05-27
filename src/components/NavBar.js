import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <a to='/' exact activeClassName='active'>
                            Homepage
                        </a>
                    </li>
                    <li>
                        <a to='/newQuestion' activeClassName='active'>
                            Add question
                        </a>
                    </li>
                    <li>
                        <a to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </a>
                    </li>
                    <li>
                        <a to='/login' activeClassName='active'>
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav
