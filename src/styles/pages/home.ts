import { styled } from "../stitches.config"

export const HomeContainer = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h1: {
    margin: 0,
    marginBottom: '1rem',
    fontSize: '2rem'
  },
  h2: {
    fontSize: '1.5rem',
    margin: 0,
    marginBottom: '1rem'
  }
}) 