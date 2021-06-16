import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Scrollbar',
  component: PageStory,
}

export const Placement = () => {
  const content = "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />"
  return (
    <MDBContainer className="m-5">
      <div className="text-center mb-5 red-text">
        <span className="font-weight-bold">OJO:</span> utiliza una definición de estilos particular: '../styles/stories/Scrollbar.scss'
      </div>
      <MDBRow>
      <MDBCol>
        <div className="scrollbar scrollbar-juicy-peach">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-young-passion">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-lady-lips">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-sunny-morning">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-rainy-ashville">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-frozen-dreams">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-warm-flame">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-night-fade">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-spring-warmth">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-winter-neva">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-dusty-grass">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-tempting-azure">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-heavy-rain">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-amy-crisp">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-mean-fruit">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-deep-blue">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-ripe-malinka">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-cloudy-knoxville">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-morpheus-den">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-rare-wind">
          {content}
        </div>
      </MDBCol>
      <MDBCol>
        <div className="scrollbar scrollbar-near-moon">
          {content}
        </div>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}