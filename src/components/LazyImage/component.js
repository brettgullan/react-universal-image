import React, { Component } from 'react'

// ----------------------------------------------------------------------------

import { Img } from './styled'

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

// ----------------------------------------------------------------------------

export class LazyImage extends Component {
  render() {
    return <Img {...this.props} />
  }
}

export default LazyImage
