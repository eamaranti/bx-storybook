import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

export default {
  title: 'Validation',
  component: PageStory,
}

export const Material_Styles = () => {
  const [datos, setDatos] = useState({
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  })

  const submitHandler = event => {
    event.preventDefault()
    event.target.className += " was-validated"
  }

  const changeHandler = event => {
    setDatos({ ...datos, [event.target.name]: event.target.value })
  }

    return (
      <MDBContainer className="m-5">
        <form
          className="needs-validation"
          onSubmit={submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={datos.fname}
                name="fname"
                onChange={changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={datos.lname}
                name="lname"
                onChange={changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={datos.email}
                onChange={changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={datos.city}
                onChange={changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={datos.state}
                onChange={changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="state"
                label="State"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={datos.zip}
                onChange={changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="zip"
                label="Zip"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="materialInvalidCheck"
              required
              label="Agree to terms and conditions"
            >
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </MDBContainer>
    )
}