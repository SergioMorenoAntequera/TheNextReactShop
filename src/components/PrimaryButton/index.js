import React from 'react'
import StyledButton from './StyledButton'

export default function PrimaryButton({onClick, children}) {
  return (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
  )
}
