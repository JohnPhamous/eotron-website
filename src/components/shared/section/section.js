import React from "react"
import styled from "styled-components"

import { Container } from "shards-react"

const Section = props => {
  return (
    <SectionContainer background={props.background}>
      <Container>{props.children}</Container>
    </SectionContainer>
  )
}

export default Section

const SectionContainer = styled.section`
  color: #333;
  padding: 60px 0;
  line-height: 1.3;
  background: ${props => props.background || `#F7F7FF`};

  p {
    font-size: 1.3em;
    margin: 24px auto;
    line-height: 1.5;
  }

  h3 {
    text-align: center;
    margin-top: 64px;
    margin-bottom: 12px;
  }

  h3:first-of-type {
    margin-top: 0px;
  }

  h4 {
    margin-top: 120px;
    margin-bottom: 30px;
  }

  h4:first-of-type {
    margin-top: inherit;
    margin-bottom: 30px;
  }

  h4::before {
    background-color: #601925;
    content: "";
    display: block;
    height: 8px;
    width: 60px;
    margin-bottom: 18px;
  }

  .description {
    color: #33333387;
    margin-top: 0px;
    text-align: center;
    margin-bottom: 60px;
  }

  .image-zoom {
    width: 25%;
    float: right;
    margin-left: 12px;
  }
`
