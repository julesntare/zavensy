import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { attendees } = this.props;
    const toAttendees = attendees.filter((user) => user.isAttending === false);
    const notAttendees = attendees.filter((user) => user.isAttending === true);
    return (
      <header className="d-flex flex-wrap justify-content-between py-2 mb-4 border-bottom bg-light">
        <div className="col-md-4">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <h2 className="ms-4 fs-4">ZaVenSy</h2>
          </a>
        </div>
        <div className="col-md-8 d-flex justify-content-end">
          <button type="button" className="btn btn-light me-3">
            Attending{" "}
            <span className="badge rounded-pill bg-primary">
              {toAttendees.length}
            </span>
          </button>
          <button type="button" className="btn btn-light me-3">
            No Attending{" "}
            <span className="badge rounded-pill bg-primary">
              {notAttendees.length}
            </span>
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attendees: state,
  };
};
export default connect(mapStateToProps)(Header);
