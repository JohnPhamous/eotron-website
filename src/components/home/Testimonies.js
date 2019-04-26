import React from "react"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"

import { Section } from "../shared"

const Testimonies = () => {
  return (
    <Section style={{ marginTop: `-90px` }}>
      <h3>Trusted By</h3>

      <p className="description">
        Our partners rely and trust our technology and services to ensure
        reliability and effectiveness.
      </p>

      <TestimoniesContainer>
        <Zoom cascade>
          <img src="https://i.imgur.com/oiOhRWy.png" alt="NASA" />
          <img
            src="https://i.imgur.com/9JAPxl9.png"
            alt="Missle Defense Agency"
          />
          <img src="https://i.imgur.com/Jx0iMn8.png" alt="US Air Force" />
          <img src="https://i.imgur.com/w2yGUiP.png" alt="PRG" />
          <img src="https://i.imgur.com/A5g05Fe.png" alt="TE Connectivity" />
        </Zoom>
      </TestimoniesContainer>
    </Section>
  )
}

export default Testimonies

const TestimoniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 15%;
  }
`
