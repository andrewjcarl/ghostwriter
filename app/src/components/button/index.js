import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ color, message, clickCallback }) => (
    <button 
        className={color}
        onClick={() => clickCallback(true)}
    >
        {message}
    </button>
)

Button.propTypes = {
    color: PropTypes.string,
    message: PropTypes.string,
    clickCallback: PropTypes.func.isRequired
}

export default Button;