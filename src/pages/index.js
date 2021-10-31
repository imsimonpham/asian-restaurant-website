import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "../components/Button"
import "bootstrap/dist/css/bootstrap.min.css"

import bg from "../assets/images/2.jpg"
import bg1 from "../assets/images/1.jpg"
import bg2 from "../assets/images/3.jpg"
import bg3 from "../assets/images/4.jpg"
import bg4 from "../assets/images/5.jpg"
import logoLg from "../assets/logo/2.png"

import { menuIcons, colors } from "../data/variables"
import Testimonials from "../components/Testimonials"

const DarkContainer = styled.div`
  color: ${colors.whiteish};
  padding: 0 5%;
  background: ${colors.darkish};
`

const TopSection = styled.section`
  top: 120px;
  min-height: 900px;
  max-width: 1200px;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media screen and (max-width: 500px) {
    top: 120px;
    min-height: auto;
  }
`

const TopContent = styled.div`
  width: 47%;
  z-index: 4;
  & > * {
    font-family: "Raleway", sans-serif;
  }

  p {
    margin-bottom: 4rem;
  }

  a {
    &:hover {
      color: ${colors.red};
      background: ${colors.whiteish};
    }
  }

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`

const Title = styled.h1`
  font-size: 8.625rem;
  margin-bottom: 2.5rem;
  line-height: 0.9;
  font-weight: 700;
  @media screen and (max-width: 900px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`

const TopImgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 900px;
  width: 50%;
  z-index: 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 85%;
    height: 300px;
  }
`

const BottomSection = styled.section`
  display: flex;
  height: 1370px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: auto;
    padding: 5rem 0;
  }
`

const BottomImgContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    flex-basis: 55%;
    margin-bottom: 4rem;

    @media screen and (max-width: 500px) {
      height: 250px;
    }
  }
  div:nth-child(2) {
    flex-basis: 30%;
  }

  & > div {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s all ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`
const BottomTextContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  h1 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
    span {
      color: ${colors.red};
    }
    @media screen and (max-width: 900px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.8rem;
      margin: 4rem 0;
    }
  }

  p:first-of-type {
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    margin-bottom: 4rem;
  }
`

const LightContainer = styled.div`
  color: ${colors.darkish};
  padding: 0 5%;
  background: ${colors.whiteish};
`

const MenuSection = styled.section`
  height: 1050px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 6rem 0;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const MenuSectionLeft = styled.div`
  /* border: 1px solid red; */
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const MenuTextWrapper = styled.div`
  width: 100%;

  h1 {
    color: ${colors.red};
    font-size: 3.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
  }
  p:first-of-type {
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    margin-bottom: 4rem;
  }
`

const MenuIconsContainer = styled.div`
  width: 100%;

  & > div:last-of-type {
    border-bottom: 0;
  }
`

const IconRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.brownish};

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const SingleIconContainer = styled.div`
  flex-basis: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2.5rem 0;
  margin-right: 10%;

  h2 {
    text-transform: uppercase;
    font-weight: 550;
    font-size: 1.375rem;
    @media screen and (max-width: 900px) {
      font-size: 1.18rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 0.8rem;
  }

  div:first-of-type {
    flex-basis: 30%;
    margin-right: 10%;
    img {
      width: 63px;
    }

    @media screen and (max-width: 500px) {
      flex-basis: auto;
    }
  }

  div:nth-of-type(2) {
    flex-basis: 60%;

    @media screen and (max-width: 500px) {
      flex-basis: auto;
    }
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    margin-right: 0;
  }
`

const MenuSectionRight = styled.div`
  flex-basis: 40%;
  position: relative;
  display: flex;
  justify-content: center;

  /* inner wrapper */
  & > div {
    width: 90%;
    height: 78%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-between;
    top: -5rem;

    @media screen and (max-width: 900px) {
      top: -10rem;
      height: 65% !important;
    }

    @media screen and (max-width: 500px) {
      height: auto !important;
      top: 0;
    }

    /* img wrapper */
    & > div:first-of-type {
      height: 57%;
      width: 82%;

      img {
        width: 100%;
        height: 100%;
      }

      @media screen and (max-width: 900px) {
        height: 50%;
        width: 95%;
      }

      @media screen and (max-width: 500px) {
        margin-bottom: 2rem;
      }
    }

    /* logo wrapper */
    & > div:nth-of-type(2) {
      position: absolute;
      top: 43%;
      width: 81%;
      height: 38%;

      img {
        width: 100%;
        height: 100%;
      }

      @media screen and (max-width: 900px) {
        width: 95%;
        height: 33%;
        top: 35%;
      }

      @media screen and (max-width: 500px) {
        position: static;
        margin-bottom: 4rem;
      }
    }
  }

  a {
    color: ${colors.whiteish};
    width: 220px;
    text-align: center;
    @media screen and (max-width: 900px) {
      font-size: 0.8rem;
      width: 200px;
    }
  }

  @media screen and (max-width: 900px) {
    height: auto;
  }
`

const GallerySection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10rem 0 0 0;
  max-width: 1200px;
  margin: 0 auto;

  & > div:nth-child(2) {
    flex-basis: 60%;
    height: 415px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const GalleryTextContainer = styled.div`
  flex-basis: 30%;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 500px) {
      font-size: 2.25rem;
    }
  }
  p:first-of-type {
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;
  }
`

const IndexPage = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <DarkContainer>
        <TopSection>
          <TopContent>
            <Title>Asian Restaurant</Title>
            <p>
              Unusual food combining the best of Asian cuisine. The very first
              bite provides a real explosion of flavours. In addition, an always
              smiling and energetic crew that will answer all of your questions.
            </p>
            <Button to="/menu">See The Menu</Button>
          </TopContent>
          <TopImgContainer>
            <img
              src={bg}
              alt="background image"
              style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            />
          </TopImgContainer>
        </TopSection>
        <BottomSection>
          <BottomImgContainer>
            <div>
              <img src={bg1} alt="background image" />
            </div>
            <div>
              <img src={bg2} alt="background image" />
            </div>
          </BottomImgContainer>
          <BottomTextContainer>
            <div>
              <h1>
                We have over <span>15 years</span> of experience
              </h1>
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
              <Button to="/about">About Us</Button>
            </div>
          </BottomTextContainer>
        </BottomSection>
      </DarkContainer>
      <LightContainer>
        <MenuSection>
          <MenuSectionLeft>
            <MenuTextWrapper>
              <h1>Menu</h1>
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
                non, consectetuer lobortis quis, varius in, purus.
              </p>
            </MenuTextWrapper>
            <MenuIconsContainer>
              {menuIcons.map((row, index) => {
                return (
                  <IconRow key={index}>
                    {row.map((item, index) => {
                      return (
                        <SingleIconContainer key={index}>
                          <div>
                            <img src={item.icon} alt="soup icon" />
                          </div>
                          <div>
                            <h2>{item.text}</h2>
                            <p>{item.smallText}</p>
                          </div>
                        </SingleIconContainer>
                      )
                    })}
                  </IconRow>
                )
              })}
            </MenuIconsContainer>
          </MenuSectionLeft>
          <MenuSectionRight>
            <div>
              <div>
                <img src={bg3} alt="background image" />
              </div>
              <div>
                <img src={logoLg} alt="logo" />
              </div>
              <Button to="/menu">See The Full Menu</Button>
            </div>
          </MenuSectionRight>
        </MenuSection>
      </LightContainer>
      <DarkContainer>
        <GallerySection>
          <GalleryTextContainer>
            <h1>Gallery</h1>
            <p>
              Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
              rhoncus eu, luctus.
            </p>
            <p>
              Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
              fringilla sed, vestibulum id, eleifend justo vel bibendum sapien
              massa ac turpis faucibus orci luctus non, consectetuer lobortis
              quis, varius in, purus. Integer ultrices.
            </p>
            <Button to="/gallery">Our Gallery</Button>
          </GalleryTextContainer>
          <div>
            <img src={bg4} alt="background image" />
          </div>
        </GallerySection>
        <DarkContainer>
          <Testimonials />
        </DarkContainer>
      </DarkContainer>
    </Layout>
  )
}

export default IndexPage
