import React, { Component } from "react"
import {
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  Card,
  CardTitle,
  CardBody,
} from "shards-react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import { Section } from "../components/shared"

export default class ContactPage extends Component {
  state = {
    subject: "",
    company: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    return
  }

  render() {
    const { subject, company, message } = this.state

    return (
      <Layout>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />

        <Hero height="55vh" />

        <Section>
          <h3>Visit Us</h3>

          <VisitUsContainer>
            <div className="address-container">
              <Card>
                <CardBody>
                  <CardTitle>Our Address</CardTitle>
                  <p>4201 E Santa Ana St Suite F</p>
                  <p>Ontario, CA 91761</p>
                  <br />
                  <p>(760) 427-7117</p>
                  <p>sales@eotron.com</p>
                </CardBody>
              </Card>
            </div>

            <Card className="map-container">
              <CardBody>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5306658676104!2d-117.56181658377103!3d34.05590842498225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3356673a62665%3A0x3015ac89869de9af!2s4201+E+Santa+Ana+St+Suite+F%2C+Ontario%2C+CA+91761!5e0!3m2!1sen!2sus!4v1555543223549!5m2!1sen!2sus"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="map"
                />
              </CardBody>
            </Card>
          </VisitUsContainer>

          <h3>Contact Us</h3>

          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <FormInput
                id="subject"
                type="text"
                required
                value={subject}
                name="subject"
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="company">Your Company</label>
              <FormInput
                id="company"
                type="text"
                required
                value={company}
                name="company"
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Your Message</label>
              <FormTextarea
                required
                value={message}
                name="message"
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <Button
              style={{
                display: `block`,
                marginLeft: `auto`,
                color: `white !important`,
                background: `#22223A`,
              }}
              href={`mailto:sales@eotron.com?cc=&amp;bcc=&amp;subject=[${company}] — ${subject}&amp;body=${message}`}
              theme="dark"
            >
              Send Message
            </Button>
          </Form>
        </Section>
      </Layout>
    )
  }
}

const VisitUsContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  p {
    margin: 0;
  }

  .address-container {
    width: 30%;
  }

  .map-container {
    width: 65%;
    height: 500px;
  }

  @media (max-width: 1000px) {
    .address-container,
    .map-container {
      width: 100%;
    }

    .address-container {
      margin-bottom: 60px;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`
