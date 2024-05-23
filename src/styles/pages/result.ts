'use client'
import { styled } from '@mui/material/styles';

export const ResultContainer = styled('div')({
  'body:has(&)': {
    background: '#dbf4f1',
  },
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h1: {
    margin: 0,
    marginBottom: '1rem',
    fontSize: '2rem'
  }
}) 