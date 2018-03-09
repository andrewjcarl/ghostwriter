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
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }
    render() {
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
                    <input />
                    <button>Submit</button>
                </form>
                </Modal>
            </div>
        );
    }
}

export default AddPostModal;