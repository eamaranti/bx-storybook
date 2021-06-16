import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBBtnGroup, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Dropdown',
  component: PageStory,
}

export const Basic = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBCol>
    </MDBRow>
  )
}

export const Split_Button = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBBtnGroup>
          <MDBBtn color="danger">
            DANGER
          </MDBBtn>
          <MDBDropdown>
            <MDBDropdownToggle caret color="danger" />
            <MDBDropdownMenu color="danger">
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBBtnGroup>
      </MDBCol>
    </MDBRow>
  )
}

export const Menu_Dividers = () => {
  return (
    <MDBRow className="m-5">
      <MDBCol>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBCol>
    </MDBRow>
  )
}