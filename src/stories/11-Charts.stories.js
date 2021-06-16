import React, { useState } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../styles/main.scss'
import PageStory from './PageStory'
import { Line, Pie } from "react-chartjs-2";
import { FaArrowCircleUp, FaArrowCircleDown, FaMinusSquare } from 'react-icons/fa'
import { MDBContainer, MDBRow, MDBCol, MDBSimpleChart } from 'mdbreact'

export default {
  title: 'Charts',
  component: PageStory,
}

export const Line_Chart = () => {
  const [dataLine] = useState(
    {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  )

  return (
    <MDBContainer className="m-5">
      <h3 className="mt-5">Line chart</h3>
      <Line data={dataLine} options={{ responsive: true }} />
    </MDBContainer>
  )
}

export const Pie_Chart = () => {
  const [dataPie] = useState(
    {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  )

  return (
    <MDBContainer className="m-5">
      <h3 className="mt-5">Pie chart</h3>
      <Pie data={dataPie} options={{ responsive: true }} />
    </MDBContainer>
  )
}

export const Minimalist_Chart = () => {
  return (
    <MDBContainer className="m-5">
      <h3 className="mt-5">Minimalistic charts</h3>
      <div style={{ marginTop: "100px" }}>
        <MDBContainer>
          <MDBRow className="text-center">
            <MDBCol sm="4">
              <MDBSimpleChart
                width={100}
                height={100}
                strokeWidth={3}
                percent={56}
                strokeColor="#4FB64E"
                labelFontWeight="300"
                labelColor="#000"
              />
              <h6 className="mt-5">
                <span className="label green p-1 white-text">
                  <strong>Sales</strong>
                  <FaArrowCircleUp className="ml-1 mb-1" />
                </span>
              </h6>
            </MDBCol>
            <MDBCol sm="4">
              <MDBSimpleChart
                width={100}
                height={100}
                strokeWidth={3}
                percent={76}
                strokeColor="#EA3C3B"
                labelFontWeight="300"
                labelColor="#000"
              />
              <h6 className="mt-5">
                <span className="label red p-1 white-text">
                  <strong>ROI</strong>
                  <FaArrowCircleDown className="ml-1 mb-1" />
                </span>
              </h6>
            </MDBCol>
            <MDBCol sm="4">
              <MDBSimpleChart
                width={100}
                height={100}
                strokeWidth={3}
                percent={100}
                strokeColor="#9D9D9D"
                labelFontWeight="300"
                labelColor="#000"
              />
              <h6 className="mt-5">
                <span className="label grey p-1 white-text">
                  <strong>Conversion</strong>
                  <FaMinusSquare className="ml-1 mb-1" />
                </span>
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBContainer>
  )
}