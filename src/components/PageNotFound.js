import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <h3>Page not found</h3>
                <div class="card  z-depth-5 center">
                    <div class="card-action center">
                        <Link to='/' className='btn'>Go back</Link>
                    </div>
                    <div class="card-image">
                        <img src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" alt='page not found'/>
                    </div>
                    <div class="card-content">
                        <span>Page you tried to access does not exist. It could be because of incorrect URL</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound
