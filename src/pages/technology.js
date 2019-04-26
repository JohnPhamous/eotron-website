import React from "react"
import ImageZoom from "react-medium-image-zoom"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../components/shared"
import TechTable from "../components/technology/TechTable"
import ComparisonTable from "../components/technology/Comparison"
import Hero from "../components/home/hero"
import HeroImage from "../images/hero2.jpg"
import { ListGroup, ListGroupItem } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO title="Technology" keywords={[`gatsby`, `application`, `react`]} />

    <Hero image={HeroImage} />

    <Section>
      <h3>Our Technology</h3>
      <img
        src="https://i.imgur.com/QENdQa3.jpg"
        alt="Heat Sink"
        className="float-right"
      />
      <p>
        Silicon plays a critical role in today’s electronic industry with its
        primary use in the IC and Solar industry. In last half century Silicon
        has revolutionized the technology industry, first by replacing vacuum
        tubes with solid-state transistors and then integrated circuits, whose
        size, complexity and performance has improved exponentially. However,
        modern thermal management of compact electronic or photonic devices
        still relies mainly on metal heat-sinks, heat-spreaders or ceramics to
        remove waste heat. Metal or ceramic heat-sinks or heat-spreaders can
        provide adequate performance given significant space and weight
        allowances. However, Silicon, as a bulk material, can provide improved
        performance and add value in solving modern thermal management issues.
      </p>
      <p>
        As the Silicon transistor replaced the vacuum tube after the invention
        of the transistor in 1947, metal heat-sinks will be replaced by superior
        materials in the near future due to better thermal performance,
        mass-production, compact size and light weight. Silicon is one such
        material and will cause a paradigm-shift in modern thermal management.
      </p>
    </Section>

    <Section background="#C1C8E4">
      <Fade>
        <TechTable />
        <ComparisonTable />
      </Fade>
    </Section>

    <Section>
      <Bounce right>
        <h4>Silicon Thermal Package Advantages</h4>

        <ListGroup>
          <ListGroupItem>
            High Thermal Conductivity (> Aluminum Alloy)
          </ListGroupItem>
          <ListGroupItem>Non-electrical Conduction</ListGroupItem>
          <ListGroupItem>
            Mass Production (> Million Piece per Lot, Low Cost Chemical Etching)
          </ListGroupItem>
          <ListGroupItem>
            Small Feature Size (10 μm Size or Below)
          </ListGroupItem>
          <ListGroupItem>3D Structure Fabrication</ListGroupItem>
          <ListGroupItem>Precision Part Tolerance (Below 2μm) </ListGroupItem>
          <ListGroupItem>
            Good Surface Finish for Better Thermal Contact
          </ListGroupItem>
          <ListGroupItem>Direct IC Layout on Silicon Substrate</ListGroupItem>
          <ListGroupItem>Matched Coefficient of Expansion (ICs)</ListGroupItem>
        </ListGroup>
      </Bounce>

      <Bounce left>
        <h4>3-D Silicon Structure</h4>

        <p>
          High heat density components can dissipate heat into a heat-spreader
          (conduction transfer) and heat-sink (convection transfer) into the
          surrounding air. Typically, a metal heat-sink has a metal base to
          conduct heat and dissipate the heat into the surrounding environment.
        </p>
        <p>
          Up to now, Silicon has seen limited work as a heat-spreader in many
          applications in electronic and optical industry. However, Eotron
          focused on developing 3D silicon structures to enhance thermal
          management of high thermal flux devices that are 1mm2 to a few cm2 in
          size. The 3D construction of our silicon structures utilize Eotron’s
          patented "V-grooved interlock" technology to scale to any footprint
          (allowed by silicon wafer size) up to a few centimeters in height.
        </p>
      </Bounce>
    </Section>
  </Layout>
)

export default IndexPage
