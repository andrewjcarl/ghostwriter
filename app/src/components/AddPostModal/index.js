import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class AddPostModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            message: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleChange(e) {
        this.setState({message: e.target.value});
    }

    handleClick() {
        this.props.db.database().ref('/posts').push({
            username: "TempUntilWeHaveUser",
            message: this.state.message,
            votevalue: 1
        });
    }

    render() {
        var that = this;
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >

                <h2 ref={subtitle => this.subtitle = subtitle}>Post your poop here</h2>
                <button onClick={this.closeModal}>X</button>
                <form>
                    <input onChange={this.handleChange} />
                    <button type="button" onClick={this.handleClick}>Submit</button>
                </form>
                </Modal>
            </div>
        );
    }
}

export default AddPostModal;