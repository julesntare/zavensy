import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

class EditAttendee extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  handleAttendeeEdit = (event) => {
    event.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const mobile = this.getMobile.value;
    const email = this.getEmail.value;
    const isAttending = this.getAttendingDecision.checked;

    const editAttendee = {
      firstName,
      lastName,
      mobile,
      email,
      isAttending,
    };

    this.props.dispatch({
      type: "UPDATE_ATTENDEE",
      id: this.props.attendee.id,
      payload: editAttendee,
    });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { attendee } = this.props;

    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <form onSubmit={this.handleAttendeeEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modify {attendee.firstName} Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-header">
              <div className="form-group">
                <div className="form-holder">
                  <input
                    ref={(input) => {
                      this.getFirstName = input;
                    }}
                    required
                    type="text"
                    defaultValue={attendee.firstName}
                    placeholder="Enter full name"
                    className="form-control"
                  />
                </div>
                <div className="form-holder">
                  <input
                    ref={(input) => {
                      this.getLastName = input;
                    }}
                    required
                    type="text"
                    defaultValue={attendee.lastName}
                    placeholder="Enter last name"
                    className="form-control"
                  />
                </div>
                <div className="form-holder">
                  <input
                    ref={(input) => {
                      this.getMobile = input;
                    }}
                    required
                    type="text"
                    defaultValue={attendee.mobile}
                    placeholder="Enter mobile no."
                    className="form-control"
                  />
                </div>
                <div className="form-holder">
                  <input
                    ref={(input) => {
                      this.getEmail = input;
                    }}
                    required
                    type="email"
                    defaultValue={attendee.email}
                    placeholder="Enter Email"
                    className="form-control"
                  />
                </div>
                <div className="form-holder">
                  <div class="d-flex form-check">
                    <input
                      ref={(input) => {
                        this.getAttendingDecision = input;
                      }}
                      required
                      type="radio"
                      class="form-check-input"
                      defaultValue={attendee.isAttending}
                      name="isAttending"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <label
                      class="form-check-label ms-4"
                      for="flexRadioDefault1"
                    >
                      Attending
                    </label>
                  </div>
                  <div class="d-flex form-check">
                    <input
                      ref={(input) => {
                        this.getAttendingDecision = input;
                      }}
                      required
                      class="form-check-input"
                      type="radio"
                      defaultValue={attendee.isAttending}
                      name="isAttending"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label ms-4"
                      for="flexRadioDefault2"
                    >
                      Not Attending
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <button className="btn btn-primary">Save Changes</button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default connect()(EditAttendee);
