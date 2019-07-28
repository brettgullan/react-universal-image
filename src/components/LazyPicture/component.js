import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { renameKeys } from 'ramda-adjunct'

// ----------------------------------------------------------------------------

import { Img } from './styled'

// ----------------------------------------------------------------------------

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

// ----------------------------------------------------------------------------

let LAZY_CLASS = 'lazyload'

// ----------------------------------------------------------------------------

const renderSources = (sources, lazy) => {
  if (sources == null) return null

  return sources.map((source, index) => {
    if (source.srcSet == null) return null
    let props = source
    if (lazy) {
      props = renameKeys({ srcSet: 'data-srcset' }, source)
    }
    return <source key={`sources-${index}`} {...props} />
  })
}

// ----------------------------------------------------------------------------

export class LazyPicture extends PureComponent {
  componentDidMount() {
    if (canUseDOM && this.props.lazy) {
      console.log('Initializing lazysizes ...')
      lazySizes = lazySizes || require('lazysizes')
    } else {
      console.log('Eagerly loading images ...')
    }
  }

  render() {
    const { sources, placeholder, lazy, ...props } = this.props
    if (lazy) {
      props.className = cx(LAZY_CLASS)
    }
    return (
      <picture>
        {renderSources(sources, lazy)}
        <Img {...props} />
      </picture>
    )
  }
}

// ----------------------------------------------------------------------------

LazyPicture.defaultProps = {
  lazy: false,
}

LazyPicture.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcSet: PropTypes.string.isRequired,
      media: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.string,
  placeholder: PropTypes.string,
  lazy: PropTypes.bool,
}

// ----------------------------------------------------------------------------

export default LazyPicture
