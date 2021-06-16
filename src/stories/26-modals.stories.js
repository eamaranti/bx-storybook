import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'

export default {
  title: 'Modals',
  component: PageStory,
}

export const Basic = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  return (
    <div className="m-5">
      <MDBBtn onClick={toggle}>Modal</MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Este es el modal básico
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline onClick={toggle}>Close</MDBBtn>
          <MDBBtn>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  )
}

export const Position_and_Size = () => {
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)

  const toggle = (nro) => {
    switch (nro) {
      case 2:
        setModal2(!modal2)
        break
      case 3:
        setModal3(!modal3)
        break
      case 4:
        setModal4(!modal4)
        break
      case 5:
        setModal5(!modal5)
        break
      default:
    }

  }
  return (
    <div className="m-5">
      <MDBBtn color="primary" onClick={() => toggle(2)}>Medium modal</MDBBtn>
      <MDBModal isOpen={modal2} toggle={() => toggle(2)}>
        <MDBModalHeader toggle={() => toggle(2)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline onClick={() => toggle(2)}>Close</MDBBtn>
          <MDBBtn>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBBtn color="primary" onClick={() => toggle(3)}>Small modal</MDBBtn>
      <MDBModal isOpen={modal3} toggle={() => toggle(3)} size="sm">
        <MDBModalHeader toggle={() => toggle(3)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline size="sm" onClick={() => toggle(3)}>Close</MDBBtn>
          <MDBBtn size="sm">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBBtn color="primary" onClick={() => toggle(4)}>Large modal</MDBBtn>
      <MDBModal isOpen={modal4} toggle={() => toggle(4)} size="lg">
        <MDBModalHeader toggle={() => toggle(4)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline onClick={() => toggle(4)}>Close</MDBBtn>
          <MDBBtn>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBBtn color="primary" onClick={() => toggle(5)}>Fluid modal</MDBBtn>
      <MDBModal isOpen={modal5} toggle={() => toggle(5)} size="fluid">
        <MDBModalHeader toggle={() => toggle(5)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline onClick={() => toggle(5)}>Close</MDBBtn>
          <MDBBtn>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  )
}