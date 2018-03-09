import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './style.css';
import Button from '../button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.logOut = this.props.logOut.bind(this);
    }

    click = () => { console.log('clicked'); };

    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <img src={logo} className="logo"/>
                </div>
                { this.props.isAuthenticated() ? (
                    <div className="header-btn">   
                        <Button 
                            color="orange"
                            message="Post"
                            clickCallback={this.click}
                        />
                        <Button 
                            message="Log Out"
                            clickCallback={this.logOut}
                        />
                    </div> 
                ) : null }
            </header>
        );
    }
}

export default Header;