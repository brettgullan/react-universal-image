import styled from 'styled-components'
import system from '@rebass/components'

import { path } from 'ramda'

// ----------------------------------------------------------------------------

export const Box = system(
  'space',
  'width',
  'maxWidth',
  'height',
  'maxHeight',
  'size',
  'color',
  'flex',
  'alignSelf',
  'order',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'display',
  'overflow',
)

export const Flex = system(
  {
    display: 'flex',
  },
  'space',
  'width',
  'maxWidth',
  'height',
  'maxHeight',
  'size',
  'color',
  'flex',
  'alignSelf',
  'order',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'display',
  'overflow',
  'flex',
  'flexWrap',
  'flexDirection',
  'justifyContent',
  'alignItems',
)

export const Icon = styled(
  system(
    {
      extend: Box,
    },
    'size',
    'space',
  ),
)`
  & > svg {
    display: block;
    width: auto;
    height: 100%;
    margin-top: 2px;
    fill: none;
    stroke-width: 1px;
    stroke: currentColor;
  }
`

// ----------------------------------------------------------------------------

export const Headline = styled(
  system(
    {
      is: 'h1',
      m: 0,
      p: 0,
      display: 'block',
      fontSize: 5,
      lineHeight: 2,
      color: 'text',
      textStyle: 'normal',
    },
    'space',
    'width',
    'display',
    'color',
    'fontSize',
    'lineHeight',
    'textStyle',
    'flex',
    'flexWrap',
    'flexDirection',
    'justifyContent',
    'alignItems',
  ),
)`
  font-family: ${path(['theme', 'fonts', 'title'])};
  font-weight: normal;
`

export const Category = styled(
  system(
    {
      is: 'div',
      m: 0,
      p: 0,
      display: 'inline-block',
      fontSize: 1,
      color: 'text',
      textStyle: 'caps',
    },
    'space',
    'color',
    'display',
    'fontSize',
    'textStyle',
  ),
)`
  font-family: ${path(['theme', 'fonts', 'title'])};
  font-weight: normal;
  line-height: 18px;
`

export const Label = styled(
  system(
    {
      is: 'div',
      m: 0,
      p: 0,
      display: 'inline-block',
      fontSize: 1,
      textAlign: 'left',
      textStyle: 'normal',
      color: 'text',
    },
    'space',
    'color',
    'display',
    'fontSize',
    'textAlign',
    'textStyle',
  ),
)`
  font-family: ${path(['theme', 'fonts', 'title'])};
  font-weight: normal;
  line-height: 18px;
`
