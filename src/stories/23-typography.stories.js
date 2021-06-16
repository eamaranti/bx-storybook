import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import {MDBRow } from 'mdbreact'


export default {
  title: 'Typography',
  component: PageStory,
}

export const Basic = () => {
  return (
    <div className="m-5">
        <MDBRow><h1>IBM Plex Sans</h1></MDBRow>
        <MDBRow><p>https://fonts.google.com/specimen/IBM+Plex+Sans</p></MDBRow>
        <MDBRow><p>The small element is used to create a lighter, secondary text in any heading:</p></MDBRow>
        
        <MDBRow><h1>h1 heading <small>secondary text</small></h1></MDBRow>
        <MDBRow><h2>h2 heading <small>secondary text</small></h2></MDBRow>
        <MDBRow><h3>h3 heading <small>secondary text</small></h3></MDBRow>
        <MDBRow><h4>h4 heading <small>secondary text</small></h4></MDBRow>
        <MDBRow><h5>h5 heading <small>secondary text</small></h5></MDBRow>
        <MDBRow><h6>h6 heading <small>secondary text</small></h6></MDBRow>
    </div>
  )
}