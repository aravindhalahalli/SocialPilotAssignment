import React from "react";
import UploadCSV from "./UploadCsv";

class SelectButton extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div>
        <h5 style={{marginTop:'20px'}}>
          Add the Property details with below options
        </h5>

        <img
          src="https://goaproperty4u.com/wp-content/uploads/2015/02/house-main.jpg"
          alt="img"
          className="imageCover"
          style={{ margin: "50px 0px 40px" }}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            style={{ margin: "20px 10px 110px 0px", padding: "10px 40px" }}
            className="Next"
            onClick={this.continue}
          >
            Add from Scratch
          </button>
          <UploadCSV />
        </div>
      </div>
    );
  }
}

export default SelectButton;
