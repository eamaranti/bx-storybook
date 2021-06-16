import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from 'mdbreact'

export default {
  title: 'Accordion',
  component: PageStory,
}

export const Gradient_Background = () => {
  const [collapseID, setCollapseID] = useState("collapse1")

  const toggleCollapse = collapseID2 => () => {
    const collapseAux = collapseID !== collapseID2 ? collapseID2 : ""
    setCollapseID(collapseAux)
  }

  return (
    <MDBContainer className="md-accordion m-5">
      <MDBContainer className="p-5">
        <MDBCard>
          <MDBCollapseHeader onClick={toggleCollapse("collapse1")}>
            <span className="text-white">#1</span>
            {
              collapseID === "collapse1"
                ? <FaAngleUp
                  className="text-white"
                  style={{ float: "right" }}
                /> : <FaAngleDown
                  className="text-white"
                  style={{ float: "right" }}
                />
            }
          </MDBCollapseHeader>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody className="border-right border-left">
              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
              bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven&apos;t
              heard of them accusamus labore sustainable VHS.
                </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
          <MDBCollapseHeader onClick={toggleCollapse("collapse2")}>
            <span className="text-white">#2</span>
            {
              collapseID === "collapse2"
                ? <FaAngleUp
                  className="text-white"
                  style={{ float: "right" }}
                /> : <FaAngleDown
                  className="text-white"
                  style={{ float: "right" }}
                />
            }
          </MDBCollapseHeader>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody className="border-right border-left">
              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
              bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven&apos;t
              heard of them accusamus labore sustainable VHS.
                </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
          <MDBCollapseHeader onClick={toggleCollapse("collapse3")}>
            <span className="text-white">#3</span>
            {
              collapseID === "collapse3"
                ? <FaAngleUp
                  className="text-white"
                  style={{ float: "right" }}
                /> : <FaAngleDown
                  className="text-white"
                  style={{ float: "right" }}
                />
            }
          </MDBCollapseHeader>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody className="border-right border-left">
              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
              bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven&apos;t
              heard of them accusamus labore sustainable VHS.
                </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  )
}