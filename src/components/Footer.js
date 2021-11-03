import React from "react"
import styled from "styled-components"
import logoLg from "../assets/logo/2.png"
import { colors } from "../data/variables"
import { IconContext } from "react-icons/lib"
import { FaPhoneAlt } from "react-icons/fa"
import {
  GrFacebookOption,
  GrTwitter,
  GrYoutube,
  GrPinterest,
} from "react-icons/gr"

import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = styled.footer`
  background: ${colors.whiteish};

  br {
    border: red;
  }
`

const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    padding: 1rem 5% 0 5%;
  }

  @media screen and (max-width: 500px) {
    padding: 5rem 5% 0 5%;
  }
`

const FooterTop = styled.div`
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`

const FooterTextContainer = styled.div`
  flex-basis: 50%;

  h4 {
    margin-bottom: 2rem;
    font-weight: 600;
  }

  div {
    color: ${colors.red};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    p {
      font-weight: 700;
      margin-bottom: 0;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;
  }
`

const PhoneIcon = styled(FaPhoneAlt)``

const LogoContainer = styled.div`
  width: 215px;
  height: 215px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 165px;
    height: 165px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;
  }
`

const FooterBottom = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin-top: -2.5rem;
  }
`

const CopyRightContainer = styled.div`
  font-weight: 400;

  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`

const SocialMediaContainer = styled.div`
  a {
    margin-left: 1.2rem;
    cursor: pointer;
    display: inline-block;

    @media screen and (max-width: 500px) {
      margin-left: 0;
      margin-right: 1.2rem;
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    text-align: center;
    margin: 0 0 1rem 0;
  }
`

const Breaker = styled.div`
  border: 1px solid ${colors.brownish};
`

const FacebookIcon = styled(GrFacebookOption)``
const TwitterIcon = styled(GrTwitter)``
const YoutubeIcon = styled(GrYoutube)``
const PinterestIcon = styled(GrPinterest)``

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  const data = useStaticQuery(query)

  const info = data.allStrapiInfo.edges[0].node.generalInfo
  const socialMedia = data.allStrapiInfo.edges[0].node.socialMedia

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterTextContainer>
            <h4> {info.businessName} - Asian Restaurant</h4>
            <p>
              Unusual food combining the best of Asian cuisine. The very first
              bite provides a real explosion of flavours. In addition, an always
              smiling and energetic crew that will answer all of your questions.
            </p>
            <div>
              <PhoneIcon />
              <p>{info.phone}</p>
            </div>
          </FooterTextContainer>
          <LogoContainer>
            <img src={logoLg} alt="logo" />
          </LogoContainer>
        </FooterTop>
      </FooterWrapper>
      <Breaker />
      <FooterWrapper>
        <FooterBottom>
          <CopyRightContainer>
            <p>© {currentYear} | Created by Simon Pham | All Rights Reserved</p>
          </CopyRightContainer>
          <SocialMediaContainer>
            <IconContext.Provider value={{ color: `${colors.red}` }}>
              <a href={socialMedia.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
              <a href={socialMedia.twitter} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
              <a href={socialMedia.youtube} target="_blank" rel="noreferrer">
                <YoutubeIcon />
              </a>
              <a href={socialMedia.pinterest} target="_blank" rel="noreferrer">
                <PinterestIcon />
              </a>
            </IconContext.Provider>
          </SocialMediaContainer>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  )
}

//data from strapi
const query = graphql`
  query InfoQuery {
    allStrapiInfo {
      edges {
        node {
          generalInfo {
            address
            businessName
            phone
          }
          socialMedia {
            facebook
            instagram
            pinterest
            twitter
            youtube
          }
        }
      }
    }
  }
`

export default Footer
