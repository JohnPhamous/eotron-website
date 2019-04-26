import React from "react"
import styled from "styled-components"

import HeroImage from "../../images/hero.jpg"

const Hero = props => {
  return <HeroContainer image={props.image} height={props.height} />
}

export default Hero

const HeroContainer = styled.section`
  height: ${props => props.height || `70vh`};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;

  h3 {
    font-size: 5em;
    font-weight: 800;
  }

  background-image: url(${props => props.image || HeroImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left 50%,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
`
