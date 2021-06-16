import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer, MDBSwitch } from 'mdbreact'

export default {
  title: 'Switch',
  component: PageStory,
}

export const Material = () => {
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(false)

  const handleSwitchChange = nr => () => {
    switch (nr) {
      case 1:
        setSwitch1(!switch1)
        break
      case 2:
        setSwitch2(!switch2)
        break
      default:
    }
  }

  return (
    <MDBContainer className="m-5">
      <MDBSwitch checked={switch1} onChange={handleSwitchChange(1)} />
      <MDBSwitch checked={switch2} onChange={handleSwitchChange(2)} />
    </MDBContainer>
  )
}