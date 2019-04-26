import React from "react"

import { Section } from "../shared"
import ApplicationData from "../../data/applications"
import GridCards from "../shared/GridCards"
import { PrimaryButton } from "../shared/button"

const Applications = () => {
  return (
    <Section background="#C1C8E4">
      <h3>Applications of UV LEDs</h3>
      <p className="description">Our technology can be used across fields.</p>

      <GridCards data={ApplicationData} />

      <PrimaryButton to="/contact" style={{ margin: `60px auto 0px auto` }}>
        Learn more from us
      </PrimaryButton>
    </Section>
  )
}

export default Applications
