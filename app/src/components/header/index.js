import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './style.css';
import Button from '../button';
import AddPostModal from '../AddPostModal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.props.logOut.bind(this);

        this.state = {
            showModal: false
        }
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
                        <AddPostModal 
                            isOpen={this.state.showModal}
                            db={this.props.db} 
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