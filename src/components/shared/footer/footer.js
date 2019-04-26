import React from "react"
import styled from "styled-components"

import { Container } from "shards-react"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>© {new Date().getFullYear()} ScanUV</p>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background: #22223a;
  color: white;
  padding: 24px;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 0;
    font-size: 11px;
  }
`
