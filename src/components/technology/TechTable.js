import React from "react"
import styled from "styled-components"

import Table, { Footnote } from "../shared/table"

const TechTable = () => {
  return (
    <TechTableWrapper>
      <Table>
        <thead>
          <tr>
            <th colSpan="9" className="header">
              UVC
            </th>
          </tr>
          <tr>
            <th>Package Type</th>
            <th>Wavelength (nm)</th>
            <th>Power (mW)</th>
            <th>Input</th>
            <th>Package Size (mm)</th>
            <th>
              Power Density* (W/cm<sup>2</sup>)
            </th>
            <th>Package Thermal Resistance (°C/W)</th>
            <th>
              Package Thermal Resistance per Area (°C/W*mm<sup>2</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>ScanUV</strong>
            </td>
            <td>275</td>
            <td>450</td>
            <td>1050mA</td>
            <td>6.0 x 6.0 x 1.5</td>
            <td>1.25</td>
            <td>1.27</td>
            <td>0.035</td>
          </tr>
          <tr>
            <td>
              <strong>ScanUV</strong>
            </td>
            <td>275</td>
            <td>1250</td>
            <td>1750mA</td>
            <td>10.0 x 10.0 x 1.5</td>
            <td>1.25</td>
            <td>1.10</td>
            <td>0.011</td>
          </tr>
          <tr>
            <td>
              <strong>Violumas</strong>
            </td>
            <td>265</td>
            <td>256</td>
            <td>14.6V</td>
            <td>7.0 x 7.0 x 5.14</td>
            <td>0.52</td>
            <td>0.8</td>
            <td>0.016</td>
          </tr>
          <tr>
            <td>
              <strong>Violumas</strong>
            </td>
            <td>280</td>
            <td>308</td>
            <td>12.2V</td>
            <td>7.0 x 7.0 x 5.14</td>
            <td>0.63</td>
            <td>0.75</td>
            <td>0.015</td>
          </tr>
          <tr>
            <td>
              <strong>LG Innotek</strong>
            </td>
            <td>278</td>
            <td>300</td>
            <td>350mA</td>
            <td>6.8 x 6.8 x 1.45</td>
            <td>0.65</td>
            <td>4.3</td>
            <td>0.093</td>
          </tr>
          <tr>
            <td>
              <strong>DOWA</strong>
            </td>
            <td>275</td>
            <td>35</td>
            <td>5.4V</td>
            <td>3.5 x 3.5 x 1.5</td>
            <td>0.29</td>
            <td>4</td>
            <td>0.327</td>
          </tr>
          <tr>
            <td>
              <strong>Nikkiso</strong>
            </td>
            <td>285</td>
            <td>45</td>
            <td>-</td>
            <td>3.5 x 3.5</td>
            <td>0.37</td>
            <td>~3.7**</td>
            <td>0.302</td>
          </tr>
          <tr>
            <td>
              <strong>UVphotonics</strong>
            </td>
            <td>265</td>
            <td>25</td>
            <td>350mA</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      <Footnote>*Power over outer dimensions of package</Footnote>
      <Footnote>
        **Thermal resistance for typical Aluminum Nitrate package
      </Footnote>
      <Footnote>
        ***Information on performance from competitors was gathered from data
        from their websites as of 2/27/2019
      </Footnote>
    </TechTableWrapper>
  )
}

export default TechTable

const TechTableWrapper = styled.div`
  tr > td:nth-of-type(3),
  tr > th:nth-of-type(3),
  tr > td:nth-of-type(8),
  tr > th:nth-of-type(8) {
    background: #b9dfff;
  }
`
