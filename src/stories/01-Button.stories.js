import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import { action } from '@storybook/addon-actions'
import PageStory from './PageStory'
import { FaPencilAlt, FaBolt, FaLeaf } from 'react-icons/fa'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact"

export default {
  title: 'Buttons',
  component: PageStory,
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
export const Outline = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn outline color="primary" onClick={action('clicked')}>Primary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline onClick={action('clicked')}>Default</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline color="secondary" onClick={action('clicked')}>Secondary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline color="success" onClick={action('clicked')}>Success</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline color="info" onClick={action('clicked')}>Info</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline color="warning" onClick={action('clicked')}>Warning</MDBBtn></MDBCol>
      <MDBCol><MDBBtn outline color="danger" onClick={action('clicked')}>Danger</MDBBtn></MDBCol>
    </MDBRow>
  )
}

export const Rounded = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn color="primary" rounded onClick={action('clicked')}>Primary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded onClick={action('clicked')}>Default</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded color="secondary" onClick={action('clicked')}>Secondary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded color="success" onClick={action('clicked')}>Success</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded color="info" onClick={action('clicked')}>Info</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded color="warning" onClick={action('clicked')}>Warning</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded color="danger" onClick={action('clicked')}>Danger</MDBBtn></MDBCol>
    </MDBRow>
  )
}
export const Rounded_outline = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn color="primary" outline rounded onClick={action('clicked')}>Primary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline onClick={action('clicked')}>Default</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="secondary" onClick={action('clicked')}>Secondary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="success" onClick={action('clicked')}>Success</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="info" onClick={action('clicked')}>Info</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="warning" onClick={action('clicked')}>Warning</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="danger" onClick={action('clicked')}>Danger</MDBBtn></MDBCol>
    </MDBRow>
  );
}
export const Gradient = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn gradient="peach" onClick={action('clicked')}>Peach</MDBBtn></MDBCol>
      <MDBCol><MDBBtn gradient="purple" onClick={action('clicked')}>Purple</MDBBtn></MDBCol>
      <MDBCol><MDBBtn gradient="blue" onClick={action('clicked')}>Blue</MDBBtn></MDBCol>
      <MDBCol><MDBBtn gradient="aqua" onClick={action('clicked')}>Aqua</MDBBtn></MDBCol>
    </MDBRow>
  )
}

export const Floating = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBBtn tag="a" size="lg" floating gradient="purple" className="px-2 py-3" onClick={action('clicked')}>
          <FaBolt size="2em" />
        </MDBBtn>
      </MDBCol>
      <MDBCol>
        <MDBBtn tag="a" size="md" floating gradient="peach" className="px-2" onClick={action('clicked')}>
          <FaPencilAlt size="2em" />
        </MDBBtn>
      </MDBCol>
      <MDBCol>
        <MDBBtn tag="a" size="sm" floating gradient="blue" className="px-2 py-2" onClick={action('clicked')}>
          <FaLeaf size="1.5em" />
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  )
}


/*
export const Rounded_outline = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol><MDBBtn color="primary" outline rounded onClick={action('clicked')}>Primary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline onClick={action('clicked')}>Default</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="secondary" onClick={action('clicked')}>Secondary</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="success" onClick={action('clicked')}>Success</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="info" onClick={action('clicked')}>Info</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="warning" onClick={action('clicked')}>Warning</MDBBtn></MDBCol>
      <MDBCol><MDBBtn rounded outline color="danger" onClick={action('clicked')}>Danger</MDBBtn></MDBCol>
    </MDBRow>
  )
}
*/
