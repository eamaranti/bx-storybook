import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact'

export default {
  title: 'Breadcrumb',
  component: PageStory,
}

export const Basic = () => {
  return (
    <MDBContainer className="m-5">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb>
        <MDBBreadcrumbItem><a href="http://localhost:9009/?path=/story/breadcrumb--basic">Home</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb>
        <MDBBreadcrumbItem><a href="http://localhost:9009/?path=/story/breadcrumb--basic">Home</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><a href="http://localhost:9009/?path=/story/breadcrumb--basic">Library</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  )
}