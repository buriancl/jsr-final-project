import React, { Component } from "react";

import "./TaskModal.css";

export default class TaskModal extends Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    if (this.state.modal === false) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
  };

  render() {
    if (this.state.modal === true) {
      return (
        <div>
          <button className="btn-modal" onClick={this.toggleModal}>
            OPEN
          </button>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                quia ad optio deleniti vel quaerat, esse tenetur, maiores dolor
                fugit ipsa iusto odio, cumque excepturi ea quasi incidunt
                suscipit commodi maxime ipsam amet voluptates. Odit
                exercitationem culpa alias at ducimus harum eligendi perferendis
                quis, sequi distinctio ut unde veniam! Esse.
              </p>
              <button className="close-modal" onClick={this.toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn-modal" onClick={this.toggleModal}>
            OPEN
          </button>
        </div>
      );
    }
  }
}
