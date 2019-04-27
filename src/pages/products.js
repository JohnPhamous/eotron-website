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
