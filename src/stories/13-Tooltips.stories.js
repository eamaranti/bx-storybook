import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBTooltip, MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Tooltips',
  component: PageStory,
}

export const Material_Email = () => {
  const style = { display: "inline-block", maxWidth: "50vh" };
  return (
    <MDBContainer className="text-center m-5">
      <MDBRow>
        <MDBCol>
          <MDBTooltip email placement="top">
            <MDBBtn color="secondary">Top tooltip</MDBBtn>
            <div>MDBTooltip on top</div>
          </MDBTooltip>
        </MDBCol>
        <MDBCol>
          <div style={style} className="text-right">
            <MDBTooltip email placement="left">
              <MDBBtn color="secondary">Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>
          <div style={style} className="text-left">
            <MDBTooltip email placement="right">
              <MDBBtn color="secondary">Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </MDBCol>
        <MDBCol>
          <MDBTooltip email placement="bottom">
            <MDBBtn color="secondary">Bottom tooltip</MDBBtn>
            <div>MDBTooltip on bottom</div>
          </MDBTooltip>
        </MDBCol>
        <MDBCol>
          <MDBTooltip email placement="bottom">
            <MDBBtn color="secondary">MD Tooltip with HTML</MDBBtn>
            <span><em>Tooltip</em> <u>with</u> <b>HTML</b></span>
          </MDBTooltip>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}