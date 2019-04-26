import React from "react"
import styled from "styled-components"

import Table from "../shared/table"

const TechTable = () => {
  return (
    <TechTableWrapper>
      <Table>
        <thead>
          <tr>
            <th colSpan="2" className="header">
              Silicon Facts
            </th>
          </tr>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Density</strong>
            </td>
            <td>
              2.3290 g/cm<sup>3</sup>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Melting Temperature</strong>
            </td>
            <td>Greater than 1414 °C</td>
          </tr>
          <tr>
            <td>
              <strong>Molar Heat Capacity</strong>
            </td>
            <td>19.8 Joule/(mol*K)</td>
          </tr>
          <tr>
            <td>
              <strong>Thermal Conductivity</strong>
            </td>
            <td>149 W/(m*K)</td>
          </tr>
          <tr>
            <td>
              <strong>Thermal Expansion</strong>
            </td>
            <td>2.6 μm/(m*K) at 25 °C</td>
          </tr>
          <tr>
            <td>
              <strong>Young's Modulus</strong>
            </td>
            <td>130—188 GPa</td>
          </tr>
          <tr>
            <td>
              <strong>Shear Modulus</strong>
            </td>
            <td>51—80 GPa</td>
          </tr>
          <tr>
            <td>
              <strong>Mohs Hardness</strong>
            </td>
            <td>7</td>
          </tr>
        </tbody>
      </Table>
    </TechTableWrapper>
  )
}

export default TechTable

const TechTableWrapper = styled.div`
  /* tr > td:nth-of-type(3),
  tr > th:nth-of-type(3),
  tr > td:nth-of-type(8),
  tr > th:nth-of-type(8) {
    background: #b9dfff;
  } */
`
