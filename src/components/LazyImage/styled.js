import styled, { css } from 'styled-components'
import system from '@rebass/components'

// ----------------------------------------------------------------------------

import { Box, Flex } from '../../theme/styled'

// ----------------------------------------------------------------------------

export const Image = styled(
  system(
    {
      extend: Flex,
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden',
    },
    'borderRadius',
  ),
)`
  a,
  picture,
  img {
    display: block;
  }
`

export const Img = system({
  extend: Box,
  is: 'img',
  display: 'block',
  width: 1,
})

// ----------------------------------------------------------------------------

export const fitImage = css`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;'; /* for object fit polyfill */
`

export const blockImage = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  max-width: none;
  height: 100%;
`

export const filteredImage = css`
  filter: saturate(0) contrast(3);
  mix-blend-mode: multiply;
  opacity: 0.46;
`
