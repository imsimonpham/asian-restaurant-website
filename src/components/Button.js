import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../data/variables"

export const Button = styled(Link)`
  background: ${colors.red};
  padding: 1rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  color: ${colors.whiteish};
  cursor: pointer;
  transition: all 0.5s ease;
  display: inline-block;

  &:hover {
    color: ${colors.whiteish};
  }

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
  }
`
