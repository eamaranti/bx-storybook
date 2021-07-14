import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import { action } from '@storybook/addon-actions'
import PageStory from './PageStory'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact"
import { withDesign } from 'storybook-addon-designs'



export default {
  title: 'Buttons',
  component: PageStory,
  decorators: [withDesign],
  
}

export const Basics = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn color="primary" onClick={action('clicked')}>Primary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn onClick={action('clicked')}>Default</MDBBtn></MDBCol>
      <MDBCol><MDBBtn color="secondary" onClick={action('clicked')}>Secondary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn color="success" onClick={action('clicked')}>Success</MDBBtn></MDBCol>
      <MDBCol><MDBBtn color="info" onClick={action('clicked')}>Info</MDBBtn></MDBCol>
      <MDBCol><MDBBtn color="warning" onClick={action('clicked')}>Warning</MDBBtn></MDBCol>
      <MDBCol><MDBBtn color="danger" onClick={action('clicked')}>Danger</MDBBtn></MDBCol>
    </MDBRow>
  )
}
Basics.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/1GJ22GkdHPztRPU7ZYvtWy/BXvdl-UI-components?node-id=340%3A309',
  },
}