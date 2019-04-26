import React from "react"
import styled from "styled-components"

import Product from "./Product"

const ProductsGrid = ({ products }) => {
  return (
    <Grid>
      {products.map(p => (
        <Product product={p} key={p.name} />
      ))}
    </Grid>
  )
}

export default ProductsGrid

const Grid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  grid-gap: 60px;

  margin-top: 60px;
`
