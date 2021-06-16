import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBBadge, MDBChip, MDBContainer, MDBCard, MDBRow, MDBCol } from 'mdbreact'

export default {
  title: 'Badges',
  component: PageStory,
}

export const Pill = () => {
  return (
    <MDBContainer>
      <MDBRow className="m-5">
        <MDBCol><MDBBadge pill color="default">Default</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="primary">Primary</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="success">Success</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="info">Info</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="warning">Warning</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="danger">Danger</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="light">Light</MDBBadge></MDBCol>
        <MDBCol><MDBBadge pill color="dark">Dark</MDBBadge></MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export const Chips_With_Avatars = () => {
  return (
    <MDBContainer>
      <MDBRow className="m-5">
        <MDBCol md="4">
          <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person" waves>
            John Doe
          </MDBChip>
        </MDBCol>
        <MDBCol md="4">
          <MDBChip size="md" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Contact Person" waves>
            Anna Smith
          </MDBChip>
        </MDBCol>
        <MDBCol md="4">
          <MDBChip size="lg" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="Contact Person" waves>
            Lara Lim
          </MDBChip>
        </MDBCol>
        <MDBCol md="4">
          <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="Contact Person" bgColor="light-blue lighten-4"
            waves>
            Tom Dark
          </MDBChip>
        </MDBCol>
        <MDBCol md="4">
          <MDBChip size="md" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg" alt="Contact Person" bgColor="light-blue lighten-4"
            waves>
            Kate Horwitz
          </MDBChip>
        </MDBCol>
        <MDBCol md="4">
          <MDBChip size="lg" src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg" alt="Contact Person" bgColor="light-blue lighten-4"
            waves>
            Danny Clark
          </MDBChip>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export const Colorful_Chips = () => {
  const [items, setItems] = useState({
    show13: true,
    show14: true,
    show15: true,
    show16: true,
    show17: true,
    show18: true,
    show19: true,
    show20: true,
    show21: true,
    show22: true,
    show23: true,
    show24: true,
    show25: true
  })

  const handleCloseHere = param => e => {
    let items2 = { ...items };
    items2["show" + param] = false;
    setItems(items2);
  }

  const { show13, show14, show15, show16, show17, show18, show19, show20, show21, show22, show23, show24, show25 } = items;

  return (
    <MDBCard style={{ maxWidth: "65%", padding: "1.25rem" }}>
      <div className="mb-4">
        <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg" alt="Contact Person" bgColor="blue lighten-4"
          waves>
          Caroline Smith
          </MDBChip>
        <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg" alt="Contact Person" bgColor="purple lighten-4"
          waves>
          Adam Grey
          </MDBChip>
        <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="Contact Person" bgColor="amber lighten-3"
          waves>
          Danny Moor
          </MDBChip>
      </div>
      <div className="mb-4">
        <MDBChip size="md" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="Contact Person" bgColor="orange darken-2"
          text="white" waves>
          Daisy Sun
          </MDBChip>
        <MDBChip size="md" src="https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg" alt="Contact Person" bgColor="cyan darken-2"
          text="white" waves>
          Martha Lores
          </MDBChip>
        <MDBChip size="md" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg" alt="Contact Person" bgColor="pink darken-2"
          text="white" waves>
          Alexandra Deyn
          </MDBChip>
      </div>
      <div className="mb-4">
        <MDBChip size="lg" src="https://mdbootstrap.com/img/Photos/Avatars/img(27).jpg" alt="Contact Person" bgColor="primary-color"
          text="white" waves>
          Olaf Horwitz
          </MDBChip>
        <MDBChip size="lg" src="https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg" alt="Contact Person" bgColor="danger-color"
          text="white" waves>
          Mary-Kate Dare
          </MDBChip>
        <MDBChip size="lg" src="https://mdbootstrap.com/img/Photos/Avatars/img(21).jpg" alt="Contact Person" bgColor="success-color"
          text="white" waves>
          The Sylvester
          </MDBChip>
      </div>
      <div className="mb-4">
        {show13 && (
          <MDBChip bgColor="teal lighten-2" text="white" close waves handleClose={handleCloseHere(13)}>
            Martha
          </MDBChip>
        )}
        {show14 && (
          <MDBChip bgColor="pink lighten-2" text="white" close waves handleClose={handleCloseHere(14)}>
            Agnes
          </MDBChip>
        )}
        {show15 && (
          <MDBChip bgColor="light-blue lighten-2" text="white" close waves handleClose={handleCloseHere(15)}>
            Caroline
          </MDBChip>
        )}
        {show16 && (
          <MDBChip bgColor="purple lighten-2" text="white" close waves handleClose={handleCloseHere(16)}>
            Elisa
          </MDBChip>
        )}
        {show17 && (
          <MDBChip bgColor="mdb-color lighten-2" text="white" close waves handleClose={handleCloseHere(17)}>
            Francesca
          </MDBChip>
        )}
      </div>
      <div className="mb-4">
        {show18 && (
          <MDBChip size="md" bgColor="red lighten-4" text="red" close waves handleClose={handleCloseHere(18)}>
            25.09.2017
          </MDBChip>
        )}
        {show19 && (
          <MDBChip size="md" bgColor="indigo lighten-4" text="indigo" close waves handleClose={handleCloseHere(19)}>
            24.08.2016
          </MDBChip>
        )}
        {show20 && (
          <MDBChip size="md" bgColor="cyan lighten-4" text="cyan" close waves handleClose={handleCloseHere(20)}>
            23.07.2015
          </MDBChip>
        )}
        {show21 && (
          <MDBChip size="md" bgColor="deep-purple lighten-4" text="deep-purple" close waves handleClose={handleCloseHere(21)}>
            22.06.2014
          </MDBChip>
        )}
      </div>
      <div className="mb-4">
        {show22 && (
          <MDBChip size="lg" gradient="aqua" text="white" close waves handleClose={handleCloseHere(22)}>
            Aqua gradient
          </MDBChip>
        )}
        {show23 && (
          <MDBChip size="lg" gradient="peach" text="white" close waves handleClose={handleCloseHere(23)}>
            Peach gradient
          </MDBChip>
        )}
        {show24 && (
          <MDBChip size="lg" gradient="purple" text="white" close waves handleClose={handleCloseHere(24)}>
            Purple gradient
          </MDBChip>
        )}
        {show25 && (
          <MDBChip size="lg" gradient="blue" text="white" close waves handleClose={handleCloseHere(25)}>
            Blue gradient
          </MDBChip>
        )}
      </div>
    </MDBCard>
  )
}