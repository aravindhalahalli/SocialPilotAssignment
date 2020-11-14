import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import Search from './Search';

class PropertyDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      address,
      bathroom,
      bedroom,
      description,
      handleChange,
      validated,
      handleSubmit,
      handleAddress
    } = this.props;
    return (
      <>
        <h5>Enter your Property Details:</h5>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Address</Form.Label>
              <Search handleAddress={handleAddress} />
              {/* <Form.Control
                required
                type="text"
                placeholder="Enter Address or auto fill"
                name="address"
                value={address}
                onChange={handleChange("address")}
              /> */}

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Bath Room</Form.Label>
              <Form.Control
                required
                type="number"
                name="bathroom"
                value={bathroom}
                placeholder="Bath Room"
                onChange={handleChange("bathroom")}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Bed Room</Form.Label>
              <Form.Control
                type="number"
                name="bedroom"
                value={bedroom}
                onChange={handleChange("bedroom")}
                placeholder="Bed Room"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={description}
                onChange={handleChange("description")}
                placeholder="Description"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </Form>
        {/* <label>
          <input
            type="text"
            name="address"
            value={address}
            placeholder="Address"
            onChange={handleChange("address")}
          />
        </label>
        <label>
          <input
            type="text"
            name="bathroom"
            value={bathroom}
            placeholder="Bath Room"
            onChange={handleChange("bathroom")}
          />
        </label>
        <label>
          <input
            type="text"
            name="bedroom"
            value={bedroom}
            onChange={handleChange("bedroom")}
            placeholder="Bed Room"
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange("description")}
            placeholder="Description"
          />
        </label> */}
        <button className="Back" onClick={this.back}>
          Back
        </button>
        <button
          className="Next"
          onClick={this.continue}
          disabled={!address||!bathroom || !bedroom || !description}
        >
          Submit and Next
        </button>
      </>
    );
  }
}

export default PropertyDetails;
