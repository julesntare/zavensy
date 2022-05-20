import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles.css";

class Attendee extends Component {
  render() {
    const { attendee } = this.props;
    const bgStyle = attendee.isAttending ? "bg-light" : "bg-success text-white";
    return (
      <div class="col-md-10 mb-3">
        <div class={`card ${bgStyle}`}>
          <div class="card-body text-center">
            <p></p>
            <ul>
              <li class="d-flex justify-content-between">
                <b>Names:</b> {attendee.firstName} {attendee.lastName}
              </li>
              <li class="d-flex justify-content-between">
                <b>Mobile No.:</b> {attendee.mobile}
              </li>
              <li class="d-flex justify-content-between">
                <b>Email:</b> {attendee.email}
              </li>
            </ul>
            <button
              className="btn btn-custom edit-icon"
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_ATTENDEE",
                  id: attendee.id,
                })
              }
            >
              <i class="fa fa-solid fa-pen"></i>
            </button>
            <button
              className="btn btn-custom delete-icon"
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_ATTENDEE",
                  id: attendee.id,
                })
              }
            >
              <i class="fa fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Attendee);
