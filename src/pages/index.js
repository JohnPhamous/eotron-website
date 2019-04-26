import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/About"
import Applications from "../components/home/Applications"
import Services from "../components/home/Services"
import Testimonies from "../components/home/Testimonies"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />
    <About />
    <Applications />
    <Testimonies />
    <Services />
  </Layout>
)

export default IndexPage
