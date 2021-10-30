import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import { colors } from "../data/variables"

import staff from "../assets/staff/1.jpg"
import bg from "../assets/images/6.jpg"
import Testimonials from "../components/Testimonials"

const HeroSection = styled.section`
  background: ${colors.darkish};
  height: 400px;
  color: ${colors.whiteish};
  padding: 5%;

  @media screen and (max-width: 900px) {
    height: 300px;
  }

  @media screen and (max-width: 500px) {
    height: 200px;
  }
`
const HeroWrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`

const Title = styled.h1`
  font-size: 5rem;
  line-height: 0.9;
  font-weight: 700;

  @media screen and (max-width: 900px) {
    font-size: 4.25rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`

const LightContainer = styled.div`
  color: ${colors.darkish};
  padding: 8% 5%;
  background: ${colors.whiteish};
`
const DarkContainer = styled.div`
  color: ${colors.whiteish};
  padding: 0 5%;
  background: ${colors.darkish};
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: ${colors.red};
    font-size: 3.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
    width: 65%;
    span {
      color: ${colors.darkish};
    }
    @media screen and (max-width: 900px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.8rem;
      margin: 4rem 0;
      width: 100%;
    }
  }
`

const AboutTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  //img wrapper
  div:nth-of-type(1) {
    flex-basis: 45%;

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 900px) {
      height: 60%;
    }

    @media screen and (max-width: 500px) {
      margin-bottom: 2rem;
    }
  }

  //text wrapper
  div:nth-of-type(2) {
    flex-basis: 50%;

    p:nth-of-type(1) {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const ParallaxImg = styled.section`
  height: 1000px;
  z-index: 3;

  div {
    width: 100%;
    height: 100%;
    background: url(${bg});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About us" />
      <HeroSection>
        <HeroWrapper>
          <Title>About us</Title>
        </HeroWrapper>
      </HeroSection>
      <LightContainer>
        <AboutContainer>
          <h1>
            We have over
            <br />
            <span>15 years</span> of experience
          </h1>

          <AboutTextContainer>
            <div>
              <img src={staff} alt="staff" />
            </div>
            <div>
              <p>
                Pellentesque facilisis. Nulla imperdiet sit amet magna.
                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
                rhoncus eu, luctus et interdum adipiscing wisi.
              </p>
              <p>
                Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem
                tortor fringilla sed, vestibulum id, eleifend justo vel bibendum
                sapien massa ac turpis faucibus orci luctus non, consectetuer
                lobortis quis, varius in, purus. Integer ultrices posuere
                cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.
                Quisque lorem tortor fringilla sed, vestibulum id, eleifend
                justo vel bibendum sapien massa ac turpis faucibus orci luctus
                non, consectetuer lobortis quis, varius in, purus. Integer
                ultrices posuere cubilia Curae, Nulla ipsum dolor lacus,
                suscipit adipiscing. Cum sociis natoque penatibus et ultrices
                volutpat.
              </p>
              <p>
                Pellentesque facilisis. Nulla imperdiet sit amet magna.
                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
                rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
                ipsum. Integer aliquam purus.
              </p>
              <p>
                Quisque lorem tortor fringilla sed, vestibulum id, eleifend
                justo vel bibendum sapien massa ac turpis faucibus orci luctus
                non, consectetuer lobortis quis, varius in, purus. Integer
                ultrices posuere cubilia Curae, Nulla ipsum dolor lacus,
                suscipit adipiscing. Cum sociis natoque penatibus et ultrices
                volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus
                ante sodales lectus blandit eu, tempor diam pede cursus vitae,
                ultricies eu, faucibus quis, porttitor eros cursus lectus,
                pellentesque eget, bibendum a, gravida ullamcorper quam.
              </p>
            </div>
          </AboutTextContainer>
        </AboutContainer>
      </LightContainer>
      <ParallaxImg>
        <div></div>
      </ParallaxImg>
      <DarkContainer>
        <Testimonials />
      </DarkContainer>
    </Layout>
  )
}

export default AboutPage
