import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'

export default {
  title: 'ListGroup',
  component: PageStory,
}

export const Basic = () => {
  return (
    <div className="m-5">
      <MDBListGroup style={{ width: "22rem" }}>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
    </div>
  )
}