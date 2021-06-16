import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { FaExclamationTriangle } from 'react-icons/fa'
import { MDBStepper, MDBStep, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Stepper',
  component: PageStory,
}

export const Horizontal = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol md="6">
        <MDBStepper>
          <MDBStep className="completed">
            <a href="http://localhost:9009/?path=/story/stepper--horizontal">
              <span className="circle">1</span>
              <span className="label">First step</span>
            </a>
          </MDBStep>
          <MDBStep className="active">
            <a href="http://localhost:9009/?path=/story/stepper--horizontal">
              <span className="circle">2</span>
              <span className="label">Second step</span>
            </a>
          </MDBStep>
          <MDBStep className="warning">
            <a href="http://localhost:9009/?path=/story/stepper--horizontal">
              <span className="circle">
                <FaExclamationTriangle className="mb-1" />
              </span>
              <span className="label">Third step</span>
            </a>
          </MDBStep>
        </MDBStepper>
      </MDBCol>
    </MDBRow>
  )
}