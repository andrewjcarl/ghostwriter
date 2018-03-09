import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import './style.css';

const LogIn = ({ login }) => (
    <div className="card">
        <div>
        You are not logged in
        </div>
        <br/>
        <Button
            color="orange"
            message="Log In"
            clickCallback={login}
        />
    </div>
);

LogIn.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LogIn;