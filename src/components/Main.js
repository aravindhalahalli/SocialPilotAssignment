import React, { Component } from "react";

import SelectButton from "./SelectButton";
import PropertyDetails from "./PropertyDetails";
import DraggableUploader from "./ImageUpload/DragableImage";

export class StepForm extends Component {
  state = {
    step: 1,

    // step 1
    address: "",
    bedroom: "",
    bathroom: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    jobCompany: "",
    jobLocation: "",
    validated: false,
  };

  //Next func
  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  //prev func
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handling all inputs func
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //func for handling google place api func
  handleAddress = (address) => {
    this.setState({'address': address});
  }

  //for each steps Ui renders
  showStep = () => {
    const { step, address, bedroom, bathroom, description } = this.state;

    if (step === 1) return <SelectButton nextStep={this.nextStep} />;
    if (step === 2)
      return (
        <PropertyDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          handleAddress={this.handleAddress}
          address={address}
          bedroom={bedroom}
          bathroom={bathroom}
          description={description}
        />
      );
    if (step === 3)
      return (
        <DraggableUploader
          address={address}
          bedroom={bedroom}
          bathroom={bathroom}
          description={description}
          prevStep={this.prevStep}
        />
      );
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <h2>Step {step} of 3.</h2>
        {this.showStep()}
      </>
    );
  }
}

export default StepForm;
