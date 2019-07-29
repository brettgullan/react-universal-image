import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { css } from 'styled-components'

// ----------------------------------------------------------------------------

import { Img } from '../base'
import { blurUp } from './styled'

// ----------------------------------------------------------------------------

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

// ----------------------------------------------------------------------------

let lazySizes

if (canUseDOM) {
  lazySizes = require('lazysizes')
}

let LAZY_CLASS = 'lazyload'

// ----------------------------------------------------------------------------

export class LazyImage extends PureComponent {
  render() {
    const {
      src,
      srcSet,
      placeholder,
      sizes,
      className,
      lazy,
      css: cssObj,
      ...rest
    } = this.props

    let props

    if (lazy) {
      props = {
        src: placeholder,
        'data-src': src,
        'data-srcset': srcSet,
        'data-sizes': sizes,
        className: cx(className, LAZY_CLASS),
        css: placeholder ? css`${cssObj}${blurUp}` : cssObj,
      }
    } else {
      props = {
        src,
        srcSet,
        sizes,
        className,
      }
    }
    Object.assign(props, rest)
    return <Img {...props} />
  }
}

// ----------------------------------------------------------------------------

LazyImage.defaultProps = {
  lazy: false,
  className: null,
  sizes: 'auto',
}

LazyImage.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  placeholder: PropTypes.string,
  lazy: PropTypes.bool,
  className: PropTypes.string,
}

// ----------------------------------------------------------------------------

export default LazyImage
