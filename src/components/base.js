import styled, { css } from 'styled-components'
import {
  compose,
  background,
  border,
  color,
  layout,
  position,
  space,
} from 'styled-system'

// ----------------------------------------------------------------------------

export const Box = styled.div(
  compose(
    space,
    layout,
    position,
    color,
    background,
    border,
  ),
)

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
