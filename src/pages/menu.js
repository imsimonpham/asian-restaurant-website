import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import { colors, restaurantMenu } from "../data/variables"

import Reservation from "../components/Reversation"

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
  padding: 5%;
  background: ${colors.darkish};
`

const DishesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    & > div:nth-of-type(2),
    & > div:nth-of-type(3) {
      border-bottom: none;
    }
  }
`

const SingleCategoryContainer = styled.div`
  height: 700px;
  display: flex;
  margin-bottom: 6rem;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    height: 800px;
    border-bottom: 1px solid ${colors.brownish};
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 500px) {
    height: auto;
    flex-direction: column !important;
    padding: 0 0 2rem 0;
    border-bottom: none;
  }
`

const Category = styled.h1`
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
`

const PricesContainer = styled.div`
  flex-basis: 40%;

  & > div:last-of-type {
    border: none;
  }
`
const DemoPicContainer = styled.div`
  flex-basis: 50%;
  height: 100% !important;
  display: flex;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    top: -2.5rem;
    max-width: 550px;
    max-height: 550px;

    @media screen and (max-width: 900px) {
      position: static;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`

const SinglePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.brownish};
  margin-bottom: 1.8rem;
`

const TextContainter = styled.div`
  flex-basis: 70%;

  h5 {
    font-weight: 600;
    font-size: 1.375rem;

    @media screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
  }

  p {
    margin-bottom: 2rem;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`

const Price = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: flex-end;
  color: ${colors.red};
  font-size: 1.875rem;
  font-weight: 550;

  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
  }
`

const MenuPage = () => {
  return (
    <Layout>
      <Seo title="Menu" />
      <HeroSection>
        <HeroWrapper>
          <Title>Main menu</Title>
        </HeroWrapper>
      </HeroSection>
      <LightContainer>
        <DishesContainer>
          {restaurantMenu.map((category, index) => {
            return (
              <SingleCategoryContainer
                key={index}
                style={{
                  flexDirection:
                    category.reverse === true ? "row-reverse" : "row",
                }}
              >
                <PricesContainer>
                  <Category>{category.dishCat}</Category>
                  {category.dishes.map((dish, index) => {
                    return (
                      <SinglePriceContainer key={index}>
                        <TextContainter>
                          <h5>{dish.dishName}</h5>
                          <p>{dish.description}</p>
                        </TextContainter>
                        <Price>{dish.price}</Price>
                      </SinglePriceContainer>
                    )
                  })}
                </PricesContainer>
                <DemoPicContainer>
                  <div>
                    <img src={category.demoPic} alt="food" />
                  </div>
                </DemoPicContainer>
              </SingleCategoryContainer>
            )
          })}
        </DishesContainer>
      </LightContainer>
      <DarkContainer>
        <Reservation />
      </DarkContainer>
    </Layout>
  )
}

export default MenuPage
