import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navbar from "./Navbar"
import styled from "styled-components"
import Footer from "./Footer"
import SimpleReactLightbox from "simple-react-lightbox"

const Page = styled.div`
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 500px) {
    p {
      font-size: 0.9rem;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // <SimpleReactLightbox>
    <Page>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <main>{children}</main>
      <Footer />
    </Page>
    // </SimpleReactLightbox>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
