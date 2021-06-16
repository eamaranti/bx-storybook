import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBNotification, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Notification',
  component: PageStory,
}

export const Placement = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999
          }}
        />
      </MDBCol>
    </MDBRow>
  )
}