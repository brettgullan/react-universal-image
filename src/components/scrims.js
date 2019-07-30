import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { css } from 'styled-components'

import { backgrounds, linearGradient, position } from 'polished'

// ----------------------------------------------------------------------------

export const NH40 = backgrounds('rgba(255, 255, 255, 0.4)')
export const ND40 = backgrounds('rgba(0, 0, 0, 0.4)')

let defaultBackground = ND40

export const setDefaultBackground = (background) =>
  (defaultBackground = background)

export const scrim = ({ inset = 0, background = defaultBackground }) => {
  const insets = Array.isArray(inset) ? inset : inset.toString().split(' ')
  return css`
    position: relative;
    &:after {
      content: '';
      ${position('absolute', ...insets)};
      ${background};
    }
  `
}
