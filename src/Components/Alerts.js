import React from "react";

function Alerts(props) {
  return (
    <div className="alert alert-primary" role="alert">
      {props.message}
    </div>
  );
}

export default Alerts;
