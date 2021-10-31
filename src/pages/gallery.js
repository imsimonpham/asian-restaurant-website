import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Reservation from "../components/Reversation"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

import { colors } from "../data/variables"

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

const GalleryContainer = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1.5rem 1rem;
  margin: 0 auto;

  .gatsby-image-wrapper {
    max-width: 350px;
    max-height: 350px;
    overflow: hidden;

    @media screen and (max-width: 500px) {
      width: 290px;
      height: 290px;
    }

    img {
      object-fit: cover;
      cursor: pointer;
      width: 100%;
      height: 100%;
      //add !important to override a bug
      transition: 0.5s all ease !important;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: { extension: { eq: "jpg" }, relativeDirectory: {} }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 350, quality: 50) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Gallery" />
      <HeroSection>
        <HeroWrapper>
          <Title>Gallery</Title>
        </HeroWrapper>
      </HeroSection>
      <LightContainer>
        <SRLWrapper>
          <GalleryContainer>
            {data.allFile.edges.map((image, index) => {
              return (
                <Img
                  key={index}
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]}
                />
              )
            })}
          </GalleryContainer>
        </SRLWrapper>
      </LightContainer>
      <DarkContainer>
        <Reservation />
      </DarkContainer>
    </Layout>
  )
}

export default GalleryPage
