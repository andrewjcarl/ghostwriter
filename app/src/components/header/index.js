import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './style.css';
import Button from '../button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click = () => { console.log('clicked'); };

    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <img src={logo} className="logo"/>
                </div>
                <div className="header-btn">
                    <Button 
                        color="orange"
                        message="Post"
                        clickCallback={this.props.toggleAddPostModal}
                    />
                </div>
            </header>
        );
    }
}

export default Header;