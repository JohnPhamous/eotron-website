import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/About"
import Products from "../components/home/Products"
import Testimonies from "../components/home/Testimonies"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />
    <About />
    <Products />
    <Testimonies />
  </Layout>
)

export default IndexPage
