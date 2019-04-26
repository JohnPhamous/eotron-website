import React from "react"

import { Section } from "../shared"
import ServiceData from "../../data/services"
import GridCards from "../shared/GridCards"
import { PrimaryButton } from "../shared/button"

const Services = () => {
  return (
    <Section background="#C1C8E4">
      <h3>Our Services</h3>
      <p className="description">
        ScanUV can help with you end-to-end business needs from technical to
        supplychain.
      </p>

      <GridCards data={ServiceData} />

      <PrimaryButton
        to="/technology#services"
        style={{ margin: `60px auto 0px auto` }}
      >
        Find the right service for you
      </PrimaryButton>
    </Section>
  )
}

export default Services
