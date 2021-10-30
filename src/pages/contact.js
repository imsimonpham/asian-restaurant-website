import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Reservation from "../components/Reversation"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { FaPhoneAlt } from "react-icons/fa"

import { colors } from "../data/variables"
import { Button2 } from "../components/Button"

import bg from "../assets/images/7.jpg"

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

const DarkContainer = styled.div`
  color: ${colors.whiteish};
  padding: 5%;
  background: ${colors.darkish};
`

const LightContainer = styled.div`
  color: ${colors.darkish};
  padding: 8% 5%;
  background: ${colors.whiteish};
`

const ContactFormSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: ${colors.red};
    font-size: 3.75rem;
    font-weight: 600;
    margin-bottom: 4rem;

    @media screen and (max-width: 900px) {
      font-size: 3.19rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 2.25rem;
    }
  }
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  & > div {
    flex-basis: 30%;
    @media screen and (max-width: 500px) {
      margin-bottom: 2rem;
    }

    //phone and phone number wrapper
    div {
      display: flex;
      align-items: center;
    }

    h4 {
      text-transform: uppercase;
      font-weight: 550;
      margin-bottom: 1.5rem;

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }

    p {
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 2rem;
      font-weight: 550;

      @media screen and (max-width: 900px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`

const PhoneIcon = styled(FaPhoneAlt)`
  color: ${colors.red};
  font-size: 2rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`

const ContactFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  //image wrapper
  & > div {
    flex-basis: 40%;

    @media screen and (max-width: 900px) {
      height: 150%;
    }

    @media screen and (max-width: 500px) {
      margin-bottom: 3rem;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`

const ContactForm = styled.form`
  flex-basis: 45%;

  @media screen and (max-width: 500px) {
    margin-bottom: 4rem;
    width: 100%;
  }

  h1 {
    margin-bottom: 1rem;
  }

  input,
  textarea {
    border: none;
    outline: none;
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 1.5rem;
    background: ${colors.brownish};

    &::placeholder {
      color: ${colors.darkish};
    }
  }

  button {
    width: 100%;
  }
`

const ContactPage = () => (
  <Layout>
    <Seo title="Contact us" />
    <HeroSection>
      <HeroWrapper>
        <Title>Contact us</Title>
      </HeroWrapper>
    </HeroSection>
    <LightContainer>
      <ContactFormSection>
        <h1>Visit Us</h1>
        <InfoWrapper>
          <div>
            <h4>Bewoo</h4>
            <p>Studio 132 Everystreet</p>
            <p>Manhatthan</p>
            <p>NY 1234 USA</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Monday — Friday: 8AM — 4PM</p>
            <p>Saturday: 10AM — 2PM</p>
          </div>
          <div>
            <h4>phone</h4>
            <div>
              <PhoneIcon />
              <span>333 014 4501</span>
            </div>
          </div>
        </InfoWrapper>
        <ContactFormWrapper>
          <ContactForm>
            <h1>Write to us</h1>
            <div>
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>

            <textarea
              required
              name="message"
              cols="30"
              rows="8"
              placeholder="Your message"
            />
            <Button2 type="submit"> Send the message</Button2>
          </ContactForm>
          <div>
            <img src={bg} alt="background image" />
          </div>
        </ContactFormWrapper>
      </ContactFormSection>
    </LightContainer>
    <DarkContainer>
      <Reservation />
    </DarkContainer>
  </Layout>
)

export default ContactPage
