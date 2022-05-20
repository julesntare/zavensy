import React from "react";
import Attendees from "./components/Attendees";
import AttendeeForm from "./components/AttendeeForm";

import "./styles.css";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container-fluid App">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
          <div className="col-md-12 d-flex justify-content-between mt-3">
            <AttendeeForm />
            <Attendees />
          </div>
        </div>
      </div>
    </div>
  );
}
