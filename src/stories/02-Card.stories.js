import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import { action } from '@storybook/addon-actions'
import PageStory from './PageStory'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardUp, MDBAvatar } from 'mdbreact'

export default {
  title: 'Cards',
  component: PageStory,
}

export const Basic = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
          </MDBCardText>
            <MDBBtn href="#" onClick={action('clicked')}>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}
export const BasicMessage = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
          </MDBCardText>
            <MDBBtn href="#" onClick={action('clicked')}>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}
export const Testimonial = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBCard testimonial style={{ width: "22rem" }}>
          <MDBCardUp gradient='aqua' />
          <MDBAvatar className='mx-auto white'>
            <img
              src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
              alt=''
            />
          </MDBAvatar>
          <MDBCardBody>
            <h4 className='card-title'>Martha Smith</h4>
            <hr />
            <p>
              <FaQuoteLeft /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci{' '}
              <FaQuoteRight />
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}