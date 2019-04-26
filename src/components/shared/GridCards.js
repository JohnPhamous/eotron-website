import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  Container,
} from "shards-react"
import Tilt from "react-tilt"
import Flip from "react-reveal/Flip"

const GridCards = ({ data }) => {
  return (
    <Container>
      <Row
        style={{
          marginBottom: `-60px`,
          justifyContent: `center`,
        }}
      >
        <Flip left cascade>
          {data.map(d => (
            <Col key={d.title} sm="12" md="4" lg="3">
              <Tilt className="Tilt" options={{ max: 35 }} reverse={true}>
                {d.link && (
                  <Link className="Tilt-inner" to={d.link}>
                    <AppCard>
                      <AppCardImgContainer>
                        <AppCardImg src={d.image} />
                      </AppCardImgContainer>
                      <AppCardBody>
                        <CardTitle>{d.title}</CardTitle>
                      </AppCardBody>
                    </AppCard>
                  </Link>
                )}

                {!d.link && (
                  <div className="Tilt-inner">
                    <AppCard>
                      <AppCardImgContainer>
                        <AppCardImg src={d.image} />
                      </AppCardImgContainer>
                      <AppCardBody>
                        <CardTitle>{d.title}</CardTitle>
                      </AppCardBody>
                    </AppCard>
                  </div>
                )}
              </Tilt>
            </Col>
          ))}
        </Flip>
      </Row>
    </Container>
  )
}

export default GridCards

const AppCard = styled(Card)`
  margin-bottom: 60px;
  height: 250px;
  text-align: center;
  overflow: hidden;

  h5 {
    margin-bottom: 0;
  }
`

const AppCardBody = styled(CardBody)`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AppCardImgContainer = styled.div`
  height: 125px;
  overflow: hidden;
`
const AppCardImg = styled(CardImg)`
  width: 100%;
`
