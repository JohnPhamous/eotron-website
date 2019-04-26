import React from "react"
import styled from "styled-components"

import Table from "../shared/table"

const TechTable = () => {
  return (
    <TechTableWrapper>
      <Table>
        <thead>
          <tr>
            <th colSpan="6" className="header">
              Silicon Comparison to Common Thermal Management Materials
            </th>
          </tr>
          <tr>
            <th />
            <th>Silicon (Crystal)</th>
            <th>Aluminum (Pure)</th>
            <th>Copper (Pure)</th>
            <th>Alumina (Ceramic)</th>
            <th>AIN (Ceramic)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Density (g/cm3)</strong>
            </td>
            <td>2.33</td>
            <td>2.70</td>
            <td>8.96</td>
            <td>3.8 (white)</td>
            <td>3.25</td>
          </tr>
          <tr>
            <td>
              <strong>Thermal conductivity (W/m*K)</strong>
            </td>
            <td>149</td>
            <td>237</td>
            <td>401</td>
            <td>~35</td>
            <td>83—170</td>
          </tr>
          <tr>
            <td>
              <strong>Thermal expansion (mm/9m*K)</strong>
            </td>
            <td>2.6</td>
            <td>23.1</td>
            <td>16.5</td>
            <td>8.4</td>
            <td>4.6—5.7</td>
          </tr>
          <tr>
            <td>
              <strong>Mohs Hardness</strong>
            </td>
            <td>7</td>
            <td>2.75</td>
            <td>3.0</td>
            <td>9.0</td>
            <td>5.0</td>
          </tr>
          <tr>
            <td>
              <strong>Surface Finish (μm)</strong>
            </td>
            <td>Less than 0.1</td>
            <td>Greater than 2.0</td>
            <td>Greater than 2.0</td>
            <td>Greater than 10.0</td>
            <td>Greater than 1.0</td>
          </tr>
          <tr>
            <td>
              <strong>Bulk Production</strong>
            </td>
            <td>Wet Etching</td>
            <td>Forging, Stamping</td>
            <td>Forging, Stamping</td>
            <td>Stamping</td>
            <td>Stamping</td>
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
