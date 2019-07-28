import React, { PureComponent } from 'react'
import cx from 'classnames'
import { css } from 'styled-components'

// ----------------------------------------------------------------------------

import { Img, blockImage, blurUp, fitImage } from './styled'

// ----------------------------------------------------------------------------

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

let lazySizes = null

if (canUseDOM) {
  lazySizes = require('lazysizes')
}

let LAZY_CLASS = 'lazyload'

// ----------------------------------------------------------------------------

export class LazyImage extends PureComponent {
  render() {
    const { src } = this.props
    const props = {
      src: this.props.placeholder,
      'data-src': this.props.src,
      'data-srcset': this.props.srcSet,
      'data-sizes': 'auto',
    }
    if (this.props.placeholder) {
      props.css = css`${fitImage}${blurUp}`
    }
    return <Img {...props} className={cx(LAZY_CLASS)} />
  }
}

export default LazyImage
