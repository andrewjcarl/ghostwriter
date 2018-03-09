import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ color, message, clickCallback }) => (
    <button 
        className={color}
        onClick={clickCallback}
    >
        {message}
    </button>
)

// class Button extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: props.color,
//             message: props.message,
//         }
//         this.clickCallback = this.props.click.bind(this);
//     }

//     render() {
//         return (
//             <button 
//                 className={color}
//                 onClick={clickCallback}
//             >
//                 {message}
//             </button>
//         )
//     }
// }

Button.propTypes = {
    color: PropTypes.string,
    message: PropTypes.string,
    click: PropTypes.func.isRequired
}

export default Button;