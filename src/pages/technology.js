import React from "react"
import ImageZoom from "react-medium-image-zoom"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../components/shared"
import TechTable from "../components/technology/TechTable"
import Hero from "../components/home/hero"
import HeroImage from "../images/hero2.jpg"
import scanuvPackage from "../images/scanuv-package.png"
import typicalPackage from "../images/typical-package.png"
import Table from "../components/shared/table"

const thermalImages = [
  "https://i.imgur.com/Mxfp7YD.png",
  "https://i.imgur.com/U2huTQx.png",
  "https://i.imgur.com/olRlpMM.png",
  "https://i.imgur.com/G0TOw1f.png",
]

const opticalImages = [
  "https://i.imgur.com/xAyZIjg.png",
  "https://i.imgur.com/8tUYGqR.png",
  "https://i.imgur.com/mV1rQ6i.png",
]

const moduleImages = [
  "https://i.imgur.com/wSD22Iz.jpg",
  "https://i.imgur.com/PP58cVJ.jpg",
  "https://i.imgur.com/gRxWQHy.jpg",
  "https://i.imgur.com/qbHYv6D.jpg",
]

const IndexPage = () => (
  <Layout>
    <SEO title="Technology" keywords={[`gatsby`, `application`, `react`]} />

    <Hero image={HeroImage} />

    <Section>
      <h3>Our Technology</h3>
      <p>
        Our Silicon package technology allows us to bring the thermal
        conductivity of Silicon up to 149 W/mK by doping the wafer in which the
        packages are manufactured. This doping allows for a package with much
        better thermal performance when compared to the commonly used Aluminum
        Nitrate (AlN) packages. Aluminum Nitrate can have thermal conductivity
        between 83 - 170 W/mK, but using high thermal conductivity AlN can
        greatly increase the price of the package, so most manufactures must use
        lower thermal conductivity values to make products affordable.
      </p>
    </Section>

    <Section background="#C1C8E4">
      <Fade>
        <TechTable />
      </Fade>

      <TableImageContainer>
        <div>
          <img src={scanuvPackage} alt="ScanUV Package" />
          <p>ScanUV Package</p>
        </div>
        <div>
          <img src={typicalPackage} alt="Typical Package" />
          <p>Typical Package</p>
        </div>
      </TableImageContainer>
    </Section>

    <Section>
      <Bounce left>
        <h3 id="services">Our Services</h3>

        <h4 id="thermal-analysis">Thermal Analysis</h4>

        <ImagesContainer>
          {thermalImages.map(i => (
            <ImageZoom
              image={{
                src: i,
                alt: "",
                className: "img",
              }}
              zoomImage={{
                src: i,
                alt: "",
              }}
              key={i}
            />
          ))}
        </ImagesContainer>

        <p>
          ScanUV conducts thermal analysis of its packages and provides services
          to its customers so they are assured their heat dissipation methods
          are appropriate for the intended application of our packages. We can
          simulate scenarios of free convection, forced convection, and water
          cooling.
        </p>
      </Bounce>

      <Bounce right>
        <h4 id="optical-design">Optical Design</h4>

        <ImagesContainer>
          {opticalImages.map(i => (
            <ImageZoom
              image={{
                src: i,
                alt: "",
                className: "img",
              }}
              zoomImage={{
                src: i,
                alt: "",
              }}
              key={i}
            />
          ))}
        </ImagesContainer>

        <p>
          ScanUV provides optical design services to ensure the use of our
          packages meets our customers optical requirements, whether those are
          uniform intensity or long distance light propagation.
        </p>
      </Bounce>

      <Bounce left>
        <h4 id="custom-module-design">Custom Module Design</h4>

        <ImagesContainer>
          {moduleImages.map(i => (
            <ImageZoom
              image={{
                src: i,
                alt: "",
                className: "img",
              }}
              zoomImage={{
                src: i,
                alt: "",
              }}
              key={i}
            />
          ))}
        </ImagesContainer>

        <p>
          We are happy to offer custom module designs for your application if
          you’re looking for a specific light intensity, light uniformity, or
          form factor. We can even design an optimal cooling solution for your
          needs if you do not want to worry about thermal problems.
        </p>
      </Bounce>
    </Section>
  </Layout>
)

export default IndexPage

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 24%;
  }
`
const TableImageContainer = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;

  div {
    width: 45%;
    text-align: center;

    img {
      width: 100%;
    }

    p {
      margin-bottom: 0px;
    }
  }
`
