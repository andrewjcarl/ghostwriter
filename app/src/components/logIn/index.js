import React, { Component } from 'react';

import Button from '../button';
import './style.css';

const LogIn = () => (
    <div className="card">
        <div>
        You are not logged in
        </div>
        <br/>
        <Button
            color="orange"
            message="Log In"
            clickCallback={this.login}
        />
    </div>
);

export default LogIn;