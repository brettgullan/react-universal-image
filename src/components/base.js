import styled, { css } from 'styled-components'
import { border, layout, position, space } from 'styled-system'

// ----------------------------------------------------------------------------

export const Img = styled.img(
  {
    display: 'block',
    width: '100%',
  },
  space,
  layout,
  position,
  border,
)

// ----------------------------------------------------------------------------

export const Picture = styled.picture(
  {
    display: 'block',
    width: '100%',
  },
  space,
  layout,
  position,
)
