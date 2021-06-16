import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBProgress, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Progress Bar',
  component: PageStory,
}

export const Labels_Material = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBProgress material value={25} height="20px">
          25%
      </MDBProgress>
      </MDBCol>
    </MDBRow>
  )
}