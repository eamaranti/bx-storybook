import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { MDBContainer } from 'mdbreact'
import DataGrid from '../components/dataGrid'

export default {
  title: 'DataGrid',
  component: PageStory,
}

function WholeNumber(value) {
  return Math.floor(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function WholeNumberGrid(data) {
  return WholeNumber(data.value)
}

export const Grid = () => {
  const [columnDefs] = useState(
    [
      {
        headerName: "",
        width: 40,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        filter: false,
        sortable: false
      },
      {
        headerName: "N° Prefactura",
        field: "preinvoice",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          buttons: ['reset'],
          suppressAndOrCondition: true
        },
        cellClass: ['text-center'],
        suppressMenu: true,
      },
      {
        headerName: "Periodo",
        field: "period",
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          buttons: ['reset'],
          suppressAndOrCondition: true
        },
        cellClass: ['text-center'],
        suppressMenu: true,
      },
      {
        headerName: "Cantidad de OT",
        field: "quantityOT",
        width: 150,
        filter: "agNumberColumnFilter",
        filterParams: {
          buttons: ['reset'],
          suppressAndOrCondition: true,
          filterOptions: [
            'equals', 'notEqual', 'lessThanOrEqual', 'greaterThan', 'inRange'
          ]
        },
        cellClass: ['text-right'],
        suppressMenu: true,
        valueFormatter: WholeNumberGrid
      },
      {
        headerName: "Total",
        field: "total",
        width: 150,
        filter: "agNumberColumnFilter",
        filterParams: {
          buttons: ['reset'],
          suppressAndOrCondition: true,
          filterOptions: [
            'equals', 'notEqual', 'lessThanOrEqual', 'greaterThan', 'inRange'
          ]
        },
        cellClass: ['text-right'],
        suppressMenu: true,
        valueFormatter: WholeNumberGrid
      }
    ]
  )

  const [rowData] = useState(
    [{
      preinvoice: "2328909824", period: "Septiembre - 2019", quantityOT: "100000", total: "3000000000"
    }, {
      preinvoice: "2328909825", period: "Agosto - 2019", quantityOT: "90000", total: "2500000000"
    }, {
      preinvoice: "2328909826", period: "Octubre - 2019", quantityOT: "110000", total: "3500000000"
    }, {
      preinvoice: "2328909827", period: "Diciembre - 2019", quantityOT: "80000", total: "2000000000"
    }, {
      preinvoice: "2328909828", period: "Noviembre - 2019", quantityOT: "105000", total: "1500000000"
    }]
  )

  return (
    <MDBContainer fluid>
      <DataGrid
        columns={columnDefs}
        data={rowData}
        typeRowSelection="multiple"
        floatingFilter={true}
        autoHeight={true}
      />
    </MDBContainer>
  )
}