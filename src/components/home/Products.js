import React from "react"

import { Section } from "../shared"
// import ProductData from "../../data/product-description"
import ProductData from "../../data/products"
import GridCards from "../shared/GridCards"
import { PrimaryButton } from "../shared/button"

const displayData = ProductData.map(i => {
  return {
    title: i.name,
    image: i.primaryImage,
  }
})

const Products = () => {
  return (
    <Section background="#C1C8E4">
      <h3>Our Products</h3>
      <p className="description" />

      <GridCards data={displayData} />

      <PrimaryButton to="/products" style={{ margin: `60px auto 0px auto` }}>
        View Products
      </PrimaryButton>
    </Section>
  )
}

export default Products
