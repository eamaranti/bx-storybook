import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import PageStory from './PageStory'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
  MDBHamburgerToggler } from 'mdbreact'

export default {
  title: 'Hamburger Menu',
  component: PageStory,
}

export const Icon_Animations = () => {
  const [collapse, setCollapse] = useState(false)

  const toggleSingleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <Router>
      <MDBContainer className="m-5">
        <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>
            <MDBNavbarBrand>
              MDBNavbar
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={() => toggleSingleCollapse()} />
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
  )
}