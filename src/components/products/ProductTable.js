import React from "react"

import Table, { Footnote } from "../shared/table"

const ProductTable = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th colSpan="9" className="header">
              UV-C Array Modules
            </th>
          </tr>
          <tr>
            <th>Array Type</th>
            <th>UV-C LED Pitch (mm)</th>
            <th>Radiant Flux (mW)</th>
            <th>Emission Area (mm)</th>
            <th>
              Power Density (W/cm<sup>2</sup>)*
            </th>
            <th>Nominal Operating Voltage (V)</th>
            <th>Nominal Operating Current (mA)</th>
            <th>UV-C LED Package Size (mm)</th>
            <th>Copper PCB Size (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>2x2**</strong>
            </td>
            <td>1.6</td>
            <td>200</td>
            <td>3.5 x 3.5</td>
            <td>1.63</td>
            <td>10.8</td>
            <td>700</td>
            <td>4.4 x 4.4 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>3x3</strong>
            </td>
            <td>1.6</td>
            <td>450</td>
            <td>5.1 x 5.1</td>
            <td>1.73</td>
            <td>16.2</td>
            <td>1050</td>
            <td>6.0 x 6.0 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>5x5</strong>
            </td>
            <td>1.6</td>
            <td>1250</td>
            <td>8.3 x 8.3</td>
            <td>1.81</td>
            <td>27.0</td>
            <td>1750</td>
            <td>10.0 x 10.0 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>1x1</strong>
            </td>
            <td>3.5</td>
            <td>50</td>
            <td>1.9 x 1.9</td>
            <td>1.39</td>
            <td>5.4</td>
            <td>350</td>
            <td>3.5 x 3.5 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>2x2</strong>
            </td>
            <td>3.5</td>
            <td>200</td>
            <td>5.5 x 5.5</td>
            <td>0.66</td>
            <td>10.8</td>
            <td>700</td>
            <td>7.2 x 7.2 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>3x3</strong>
            </td>
            <td>3.5</td>
            <td>450</td>
            <td>9.2 x 9.2</td>
            <td>0.53</td>
            <td>16.2</td>
            <td>1050</td>
            <td>10.8 x 108 x 1.5</td>
            <td>20 x 20 x 4</td>
          </tr>
          <tr>
            <td>
              <strong>4x4</strong>
            </td>
            <td>3.5</td>
            <td>800</td>
            <td>12.8 x 12.8</td>
            <td>0.49</td>
            <td>21.6</td>
            <td>1400</td>
            <td>14.5 x 14.5 x 1.5</td>
            <td>30 x 30 x 4</td>
          </tr>
        </tbody>
      </Table>
      <Footnote>*Radiant flux over emission area</Footnote>
      <Footnote>**Coming soon</Footnote>
      <Footnote>
        ***All wavelengths are centered around 275nm +/- 3nm; and the wavelength
        bandwidth [FWHM] is around 11nm or less
      </Footnote>
    </>
  )
}

export default ProductTable
