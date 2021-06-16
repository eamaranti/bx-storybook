import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import PageStory from './PageStory'
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBRow } from 'mdbreact'

export default {
  title: 'Pills',
  component: PageStory,
}

export const PillsRounded = () => {
  const [items, setItems] = useState({
    rounded: "1",
    rounded2: "1",
    roundedGradient: "1",
    roundedGradient2: "1",
    roundedOutline: "1",
    roundedOutline2: "1",
  })

  const togglePills = (type, tab) => e => {
    e.preventDefault();
    if (items[type] !== tab) {
      let items2 = { ...items };
      items2[type] = tab;
      setItems(items2);
    }
  }

  return (
    <MDBContainer className="m-5">
      <div className="text-center mb-5 red-text"><span className="font-weight-bold">OJO:</span> utiliza una definición de estilos particular: '../styles/stories/Pills.scss'</div>
      <MDBRow>
        <Router>
          <MDBNav
            pills
            color="deep-purple"
            className="nav-justified col-md-6 pills-rounded"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded"] === "1"}
                onClick={togglePills("rounded", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded"] === "2"}
                onClick={togglePills("rounded", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded"] === "3"}
                onClick={togglePills("rounded", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded"] === "4"}
                onClick={togglePills("rounded", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <MDBNav
            pills
            color="light-purple"
            className="nav-justified col-md-6 pills-rounded"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded2"] === "1"}
                onClick={togglePills("rounded2", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded2"] === "2"}
                onClick={togglePills("rounded2", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded2"] === "3"}
                onClick={togglePills("rounded2", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["rounded2"] === "4"}
                onClick={togglePills("rounded2", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <MDBNav
            pills
            className="nav-justified col-md-6 pills-peach-gradient pills-rounded"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient"] === "1"}
                onClick={togglePills("roundedGradient", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient"] === "2"}
                onClick={togglePills("roundedGradient", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient"] === "3"}
                onClick={togglePills("roundedGradient", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient"] === "4"}
                onClick={togglePills("roundedGradient", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <MDBNav
            pills
            className="nav-justified col-md-6 pills-rounded pills-green-gradient"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient2"] === "1"}
                onClick={togglePills("roundedGradient2", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient2"] === "2"}
                onClick={togglePills("roundedGradient2", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient2"] === "3"}
                onClick={togglePills("roundedGradient2", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedGradient2"] === "4"}
                onClick={togglePills("roundedGradient2", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <MDBNav
            pills
            className="nav-justified col-md-6 pills-rounded pills-outline-red"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline"] === "1"}
                onClick={togglePills("roundedOutline", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline"] === "2"}
                onClick={togglePills("roundedOutline", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline"] === "3"}
                onClick={togglePills("roundedOutline", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline"] === "4"}
                onClick={togglePills("roundedOutline", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <MDBNav
            pills
            className="nav-justified col-md-6 pills-rounded pills-outline-green"
          >
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline2"] === "1"}
                onClick={togglePills("roundedOutline2", "1")}
              >
                Active
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline2"] === "2"}
                onClick={togglePills("roundedOutline2", "2")}
              >
                Link 1
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline2"] === "3"}
                onClick={togglePills("roundedOutline2", "3")}
              >
                Link 2
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={items["roundedOutline2"] === "4"}
                onClick={togglePills("roundedOutline2", "4")}
              >
                Link 3
                </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </Router>
      </MDBRow>
    </MDBContainer>
  )
}