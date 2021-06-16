import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { FaSearch } from 'react-icons/fa'
import { MDBContainer, MDBRow, MDBCol, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption } from 'mdbreact'

export default {
  title: 'Search',
  component: PageStory,
}

export const With_Input_Group = () => {
  return (
    <MDBContainer className="m-5">
      <div className="text-center mb-5 red-text">
        <span className="font-weight-bold">OJO:</span> utiliza una definición de estilos particular: '../styles/stories/Search.scss'
      </div>
      <MDBRow>
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span className="input-group-text purple lighten-3" id="basic-text1">
                <FaSearch className="text-white" />
              </span>
            </div>
            <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export const Within_Multiselect = () => {

  const getValueOfSelectOne = value => {
    console.log(value);
  }

  return (
    <MDBContainer className="m-5">
      <MDBCol md="6">
        <MDBSelect multiple getValue={value => getValueOfSelectOne(value)}>
          <MDBSelectInput selected="Choose your option" />
          <MDBSelectOptions search>
            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
            <MDBSelectOption>Option nr 1</MDBSelectOption>
            <MDBSelectOption>Option nr 2</MDBSelectOption>
            <MDBSelectOption>Option nr 3</MDBSelectOption>
            <MDBSelectOption>Option nr 4</MDBSelectOption>
            <MDBSelectOption>Option nr 5</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
      </MDBCol>
    </MDBContainer>
  )
}