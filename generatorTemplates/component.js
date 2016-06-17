import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './<%= nameUpper %>.css';

class <%= nameUpper %> extends Component {
    render() {
        return (
            <div className="ui container">
                <h2><%= nameUpper %></h2>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </div>
        );
    }
}

export default <%= nameUpper %>;
