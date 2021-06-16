import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBDatePickerV5 } from 'mdbreact'

export default {
  title: 'Datepicker',
  component: PageStory,
}

export const Inline = () => {
  return (
    <MDBContainer className="m-5">
      <div className="text-center mb-5 red-text">
        <span className="font-weight-bold">OJO:</span> utiliza una definición de estilos particular: '../styles/stories/Datepicker.scss'
      </div>
      <div>
        <MDBDatePickerV5 inline getValue={(e)=> console.log(e)} />
      </div>
    </MDBContainer>
  )
}