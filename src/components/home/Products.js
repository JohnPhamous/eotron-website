import React from "react"

import { Section } from "../shared"
import ProductData from "../../data/product-description"
import GridCards from "../shared/GridCards"
import { PrimaryButton } from "../shared/button"

const Products = () => {
  return (
    <Section background="#C1C8E4">
      <h3>Our Products</h3>
      <p className="description" />

      <GridCards data={ProductData} />

      <PrimaryButton to="/products" style={{ margin: `60px auto 0px auto` }}>
        View Products
      </PrimaryButton>
    </Section>
  )
}

export default Products
