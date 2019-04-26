import React, { Component } from "react"
import styled from "styled-components"
import * as emailjs from "emailjs-com"

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormInput,
  FormGroup,
  Button,
} from "shards-react"
import Tilt from "react-tilt"
import { PrimaryButton, RegularButton } from "../shared/button"
import ImageZoom from "react-medium-image-zoom"

class Product extends Component {
  state = {
    modalOpen: false,
    user: {
      name: "",
      company: "",
      email: "",
    },
    shouldShowDownloadPrompt: false,
    showDownloadPrompt: false,
    photoExpanded: false,
  }

  toggle = () => {
    if (!this.state.photoExpanded) {
      this.setState({ modalOpen: !this.state.modalOpen })
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      this.setState({ shouldShowDownloadPrompt: true })
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      user: { ...this.state.user, [name]: value },
    })
  }

  checkUserBeforeDownload = () => {
    if (this.state.shouldShowDownloadPrompt) {
      this.setState({ showDownloadPrompt: true })
    } else {
      window.open(this.props.product.pdf)
    }
  }

  submitUserInfo = e => {
    e.preventDefault()
    const { user } = this.state
    const { product } = this.props

    const SERVICE_ID = "default_service"
    const TEMPLATE_ID = "user_information"
    const USER_ID = "user_oZBcUUKFat9SQYzs7FIIM"

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...user, product: product.name },
        USER_ID
      )
      .then(
        res => {
          console.log(res)
          localStorage.setItem("user", JSON.stringify(this.state.user))
          this.setState({
            shouldShowDownloadPrompt: false,
            showDownloadPrompt: false,
          })
          window.open(this.props.product.pdf)
        },
        err => console.error(err)
      )
  }

  render() {
    const { product } = this.props
    const { modalOpen, showDownloadPrompt, user } = this.state

    return (
      <ProductContainer>
        <Tilt className="Tilt" options={{ max: 35 }} reverse={true}>
          <ThumbnailContainer>
            <img src={product.primaryImage} alt="" onClick={this.toggle} />
          </ThumbnailContainer>
        </Tilt>
        <p>{product.name}</p>

        <Modal open={modalOpen} toggle={this.toggle} size="lg" centered>
          <ModalHeader>{product.name}</ModalHeader>
          <ModalBody>
            <ModalBodyContainer>
              <ImageContainer>
                <ImageZoom
                  image={{
                    src: product.primaryImage,
                    className: "primary-image",
                  }}
                  zoomImage={{
                    src: product.primaryImage,
                  }}
                  onZoom={() => this.setState({ photoExpanded: true })}
                  onUnzoom={() => this.setState({ photoExpanded: false })}
                />

                {product.secondaryImages.map(i => (
                  <SecondaryImageContainer>
                    <ImageZoom
                      key={i}
                      image={{
                        src: i,
                      }}
                      zoomImage={{
                        src: i,
                      }}
                      onZoom={() => this.setState({ photoExpanded: true })}
                      onUnzoom={() => this.setState({ photoExpanded: false })}
                    />
                  </SecondaryImageContainer>
                ))}
              </ImageContainer>
              <DetailContainer
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </ModalBodyContainer>
          </ModalBody>
          <ModalFooter>
            {product.name !== "Lensing Options" ? (
              <RegularButton onClick={this.checkUserBeforeDownload}>
                Download PDF
              </RegularButton>
            ) : (
              <PrimaryButton to="/contact">Contact Us</PrimaryButton>
            )}
          </ModalFooter>
        </Modal>

        <Modal
          open={showDownloadPrompt}
          centered
          backdropClassName="form-shadow"
          toggle={() =>
            this.setState({
              showDownloadPrompt: !this.state.showDownloadPrompt,
            })
          }
        >
          <ModalHeader>Your Information</ModalHeader>
          <ModalBody>
            <p style={{ marginTop: `0px` }}>
              Before you can download the PDF, we will need your information.
            </p>

            <hr />

            <Form>
              <FormGroup>
                <label htmlFor="#name">Name</label>
                <FormInput
                  id="#name"
                  name="name"
                  placeholder="Alice Bob"
                  type="text"
                  value={user.name}
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="#company">Company</label>
                <FormInput
                  type="text"
                  id="#company"
                  name="company"
                  placeholder="Acme Corp"
                  value={user.company}
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="#email">Email</label>
                <FormInput
                  type="email"
                  id="#email"
                  name="email"
                  placeholder="alice.bob@acme.com"
                  value={user.email}
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>

              <Button
                type="submit"
                theme="dark"
                style={{
                  display: `block`,
                  marginLeft: `auto`,
                  color: `white !important`,
                  background: `#22223A`,
                }}
                onClick={this.submitUserInfo}
                disabled={!(user.email && user.company && user.name)}
              >
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </ProductContainer>
    )
  }
}

export default Product

const ProductContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .modal-backdrop.show {
    opacity: 0.8;
    background: #000;
  }

  .modal-lg {
    max-width: 80vw;
  }

  .form-shadow {
    z-index: 2 !important;
  }

  .modal-content {
    max-height: 95vh;
    overflow: scroll;
  }
`
const ModalBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "Primary-Image Primary-Image Primary-Image Primary-Image" ". . . ." ". . . .";
  grid-gap: 12px;
  align-content: start;

  .primary-image {
    grid-area: Primary-Image;
  }
`

const DetailContainer = styled.div`
  p {
    margin: 0;
    margin-top: -8px;
    margin-bottom: 24px;
    line-height: 1.3;
  }
`

const ThumbnailContainer = styled.div`
  height: 250px;
  overflow: hidden;

  img {
    height: 100%;
  }
`

const SecondaryImageContainer = styled.div`
  height: 100px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    bottom: -100%;
    margin: auto;
  }
`
