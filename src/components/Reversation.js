import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { colors } from "../data/variables"

const ReservationSection = styled.section`
  text-align: center;
  padding: 5rem 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 60%;
    @media screen and (max-width: 900px) {
      width: 80%;
    }
  }

  h5 {
    text-transform: uppercase;
    font-size: 0.94rem;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  p {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3.75rem;
    span {
      color: ${colors.red};
    }

    @media screen and (max-width: 500px) {
      font-size: 2.25rem;
    }
  }

  a {
    padding: 1rem 2.5rem;
  }
`

const Reversation = () => {
  return (
    <ReservationSection>
      <div>
        <h5>reservation</h5>
        <h1>
          <span>Book</span> a table
        </h1>
        <p>
          Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet
          ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a,
          semper feugiat sem. Sed auctor dui eleifend.
        </p>
        <Button>make a reservation</Button>
      </div>
    </ReservationSection>
  )
}

export default Reversation
