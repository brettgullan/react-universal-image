import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import LazyImage from '../LazyImage'

// ----------------------------------------------------------------------------

const renderSources = (sources, lazy) =>
  sources.map((source, index) => {
    const { srcSet, ...rest } = source
    if (srcSet == null) return null

    const props = lazy ? Object.assign(rest, { 'data-srcset': srcSet }) : source

    return <source key={`sources-${index}`} {...props} />
  })

// ----------------------------------------------------------------------------

export class LazyPicture extends PureComponent {
  render() {
    const { sources, ...props } = this.props

    return sources ? (
      <picture>
        {/* Note: deliberately omitting the old IE 9 video tags here. */}
        {renderSources(sources, this.props.lazy)}
        <LazyImage {...props} sizes={null} />
      </picture>
    ) : (
      <LazyImage {...props} />
    )
  }
}

// ----------------------------------------------------------------------------

LazyPicture.defaultProps = {
  lazy: false,
  className: null,
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
  srcSet: PropTypes.string,
  placeholder: PropTypes.string,
  lazy: PropTypes.bool,
  className: PropTypes.string,
}

// ----------------------------------------------------------------------------

export default LazyPicture
