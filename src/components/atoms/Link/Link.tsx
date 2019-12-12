import * as React from 'react'
import styled from 'styled-components'

interface Props {
  href: string
  children?: React.ReactNode
}

export const Link: React.FC<Props> = ({ href, children }) => {
  return (
    <StyledLink href={href} target="_blank">
      {children}
    </StyledLink>
  )
}


const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`
