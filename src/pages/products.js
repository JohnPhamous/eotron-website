import React from "react"
import { Card, CardBody } from "shards-react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import { Section } from "../components/shared"
import ProductsGrid from "../components/products/ProductsGrid"
// import ImageZoom from "react-medium-image-zoom"
import ProductTable from "../components/products/ProductTable"

import HeroImage from "../images/hero4.jpg"
import ProductsData from "../data/products"

const bulletPoints = [
  "UVB and UVC LED packages",
  "Highly customizable modules",
  "Simple and quick integration",
  "Highest power in the market",
  "Extremely low thermal resistance",
  "Pre-lensed package options",
]
const IndexPage = () => (
  <Layout>
    <SEO title="Products" keywords={[`scanuv`, `electronics`, `product`]} />

    <Hero image={HeroImage} />

    <Section>
      <h3>About our Products</h3>

      <BulletPointsContainer>
        {bulletPoints.map(p => (
          <Card
            key={p}
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              textAlign: `center`,
              background: `#22223A`,
            }}
          >
            <CardBody>
              <p style={{ color: `white`, marginTop: `0` }}>{p}</p>
            </CardBody>
          </Card>
        ))}
      </BulletPointsContainer>

      {/* <ImageZoom
        style={{ width: `30%`, marginTop: `30px` }}
        image={{
          src: "https://i.imgur.com/SwuWWUo.png",
          alt: "",
        }}
        zoomImage={{
          src: "https://i.imgur.com/SwuWWUo.png",
          alt: "",
        }}
      /> */}
    </Section>

    <Section>
      <ProductTable />
    </Section>

    <Section>
      <h3>Products</h3>

      <ProductsGrid products={ProductsData} />
    </Section>
  </Layout>
)

export default IndexPage

const BulletPointsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 60px;
`
