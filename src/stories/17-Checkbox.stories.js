import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBInput, MDBRow } from 'mdbreact'

export default {
  title: 'Checkbox',
  component: PageStory,
}

export const Material = () => {
  return (
    <MDBContainer className="m-5">
      <MDBRow className="mb-3">
        {/* Material unchecked */}
        <MDBInput label="Material unchecked" type="checkbox" id="checkbox1" />
      </MDBRow>
      <MDBRow className="mb-3">
        {/* Material checked */}
        <MDBInput label="Material checked" checked type="checkbox" id="checkbox2" />
      </MDBRow>
      <MDBRow className="mb-3">
        {/* Material unchecked disabled */}
        <MDBInput label="Material unchecked disabled" disabled type="checkbox" id="checkbox3" />
      </MDBRow>
      <MDBRow>
        {/* Material checked disabled */}
        <MDBInput label="Material checked disabled" checked disabled type="checkbox" id="checkbox4" />
      </MDBRow>
    </MDBContainer>
  )
}