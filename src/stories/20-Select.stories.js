import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBSelect } from 'mdbreact'

export default {
  title: 'Select',
  component: PageStory,
}

export const With_Icons = () => {
  const options = [
    {
      icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg",
      value: "example 1",
      text: "User nr 1"
    },
    {
      icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg",
      value: "example 2",
      text: "User nr 2"
    },
    {
      icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
      value: "example 3",
      text: "User nr 3",
    }
  ]

  return (
    <MDBContainer className="m-5">
      <MDBSelect
        options={options}
        selected="Choose your option"
        label="Example label"
      />
    </MDBContainer>
  )
}

export const Multiple = () => {
  const options = [
    {
      text: "Option nr 1",
      value: "1"
    },
    {
      text: "Option nr 2",
      value: "2"
    },
    {
      text: "Option nr 3",
      value: "3"
    }
  ]

  return (
    <MDBContainer className="m-5">
      <MDBSelect
        multiple
        options={options}
        selected="Choose your option"
        label="Example label"
      />
    </MDBContainer>
  )
}