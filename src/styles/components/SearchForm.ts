'use client'
import { styled } from '@mui/material/styles';

export const FormContainer = styled('div')({
    maxWidth: 600,
    width: '100%',
    padding: '3rem',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    button: {
      width: 'fit-content',
      margin: '1rem auto 0'
    }
}) 