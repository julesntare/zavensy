import React, { Component } from "react";
import { connect } from "react-redux";
import "./AttendeeForm.css";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      attendees: [],
      isAttendeeExists: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const mobile = this.getMobile.value;
    const email = this.getMailAddress.value;
    const isAttending = this.getAttendingDecision.checked;

    // check if email already exists
    const emailFound = this.state.attendees.findIndex(
      (attendee) => attendee.email === email
    );

    if (emailFound !== -1) {
      this.setState({ isAttendeeExists: true });
      return;
    }

    const newAttendee = {
      id: Math.floor(Math.random() * 1000) + 1,
      firstName,
      lastName,
      mobile,
      email,
      isAttending,
    };

    this.props.dispatch({
      type: "ADD_ATTENDEE",
      payload: newAttendee,
    });
    this.state.attendees.push(newAttendee);
    this.getFirstName.value = "";
    this.getLastName.value = "";
    this.getMobile.value = "";
    this.getMailAddress.value = "";
    this.getAttendingDecision.checked = false;
  };
  render() {
    return (
      <div className="col-md-6 wrapper">
        <form onSubmit={this.handleSubmit}>
          <div id="wizard">
            <h2 className="mb-4">Add Event Attendee</h2>
            {this.state.isAttendeeExists && (
              <div class="alert alert-danger" role="alert">
                Attendee already registered
              </div>
            )}
            <section>
              <div className="form-header">
                <div className="form-group">
                  <div className="form-holder">
                    <input
                      ref={(input) => {
                        this.getFirstName = input;
                      }}
                      required
                      type="text"
                      placeholder="First Name"
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
                      placeholder="Last Name"
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
                      placeholder="Mobile No."
                      className="form-control"
                    />
                  </div>
                  <div className="form-holder">
                    <input
                      ref={(input) => {
                        this.getMailAddress = input;
                      }}
                      required
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-holder">
                    <div class="d-flex form-check">
                      <input
                        ref={(input) => {
                          this.getAttendingDecision = input;
                        }}
                        class="form-check-input"
                        type="radio"
                        name="attendee"
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
                        name="attendee"
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

                  <div class="actions clearfix mb-3 d-flex justify-content-center">
                    <ul role="menu" aria-label="Pagination">
                      <li aria-hidden="false" aria-disabled="false">
                        <button className="save-btn">Save</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attendees: state,
  };
};

export default connect(mapStateToProps)(UserForm);
