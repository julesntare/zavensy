import React, { Component } from "react";
import { connect } from "react-redux";
import Attendee from "./Attendee";
import EditAttendee from "./EditAttendee";
import "../styles.css";

class Attendees extends Component {
  render() {
    const { attendees } = this.props;
    attendees.reverse();
    return (
      <div className="col-md-5">
        <h1>Attendees List</h1>
        <div className="d-flex justify-content-between flex-wrap attendee-container">
          {attendees.map((attendee) => (
            <div className="col-md-6" key={attendee.id}>
              {attendee.editing ? (
                <>
                  <EditAttendee attendee={attendee} key={attendee.id} />
                  <Attendee attendee={attendee} key={attendee.id} />
                </>
              ) : (
                <Attendee attendee={attendee} key={attendee.id} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attendees: state,
  };
};

export default connect(mapStateToProps)(Attendees);
