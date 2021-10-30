import React from "react"
import { colors, customerTestimonials } from "../data/variables"
import styled from "styled-components"
import { IconContext } from "react-icons/lib"
import Carousel from "react-bootstrap/Carousel"

import blackBg from "../assets/customers/blackBg.png"

import { AiFillStar } from "react-icons/ai"

const TestimonialSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
`

const TestimonialTitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  h1 {
    flex-basis: 40%;
    font-size: 3.5rem;
    font-weight: 700;
    span {
      color: ${colors.red};
    }

    @media screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 35%;
  text-align: right;

  @media screen and (max-width: 500px) {
    text-align: left;
  }
`
const StarsContainer = styled.div``
const StarIcon = styled(AiFillStar)`
  margin-left: 0.4rem;
  font-size: 0.8rem;

  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-right: 0.4rem;
  }
`
const CarouselContainer = styled.div`
  height: 350px;
  max-width: 1000px;
  color: ${colors.whiteish};
  margin: 0 auto;

  .carousel {
    height: 350px;
    width: 100%;

    @media screen and (max-width: 500px) {
      height: 420px;
    }
  }

  //background
  .carouselItem {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 500px) {
      height: 420px;
    }
  }

  //caption and avatar
  .carouselCaption {
    p {
      color: ${colors.whiteish};
    }
    & > div {
      width: 85px;
      height: 85px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -180%);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .carousel-dark .carousel-indicators [data-bs-target] {
    background-color: ${colors.red};
  }
  @media screen and (max-width: 500px) {
    height: 420px;
  }
`

const Testimonials = () => {
  return (
    <TestimonialSection>
      <TestimonialTitlesContainer>
        <h1>
          What our <span>customers</span> say
        </h1>
        <RatingContainer>
          <StarsContainer>
            <IconContext.Provider value={{ color: `${colors.red}` }}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </IconContext.Provider>
          </StarsContainer>
          <p>Average customer rating 4.82 (253 votes)</p>
        </RatingContainer>
      </TestimonialTitlesContainer>
      <CarouselContainer>
        <Carousel variant="dark" className="carousel" aria-hidden="true">
          {customerTestimonials.map((item, index) => {
            return (
              <Carousel.Item key={index} className="carouselItem">
                <img
                  className="d-block w-100"
                  src={blackBg}
                  alt="black background"
                />
                <Carousel.Caption className="carouselCaption">
                  <div>
                    <img
                      className="d-block w-100"
                      src={item.avatar}
                      alt="customer"
                    />
                  </div>
                  <p>{item.testimonial}</p>
                  <p>{item.name}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </CarouselContainer>
    </TestimonialSection>
  )
}

export default Testimonials
