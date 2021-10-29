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
import { Link } from "gatsby"

const FooterContainer = styled.footer`
  background: ${colors.whiteish};
`

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterTop = styled.div`
  height: 400px;
  border-bottom: 1px solid ${colors.brownish};
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`

const FooterBottom = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const CopyRightContainer = styled.div`
  font-weight: 400;
`

const SocialMediaContainer = styled.div`
  & > * {
    margin-left: 1.2rem;
    cursor: pointer;
  }
`

const FacebookIcon = styled(GrFacebookOption)``
const TwitterIcon = styled(GrTwitter)``
const YoutubeIcon = styled(GrYoutube)``
const PinterestIcon = styled(GrPinterest)``

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterTextContainer>
            <h4>BEWOO - Asian Restaurant</h4>
            <p>
              Unusual food combining the best of Asian cuisine. The very first
              bite provides a real explosion of flavours. In addition, an always
              smiling and energetic crew that will answer all of your questions.
            </p>
            <div>
              <PhoneIcon />
              <p>333 014 4501</p>
            </div>
          </FooterTextContainer>
          <LogoContainer>
            <img src={logoLg} alt="logo" />
          </LogoContainer>
        </FooterTop>
        <FooterBottom>
          <CopyRightContainer>
            © {currentYear} | Created by Simon Pham | All Rights Reserved
          </CopyRightContainer>
          <SocialMediaContainer>
            <IconContext.Provider value={{ color: `${colors.red}` }}>
              <a href="/https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
              <a href="/https://www.facebook.com/" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://twitter.com/home" target="_blank">
                <YoutubeIcon />
              </a>
              <a href="https://www.pinterest.com/" target="_blank">
                <PinterestIcon />
              </a>
            </IconContext.Provider>
          </SocialMediaContainer>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
