import React, { PureComponent } from 'react'

// ----------------------------------------------------------------------------

import { Img } from './styled'

// ----------------------------------------------------------------------------

export class Picture extends PureComponent {
  renderSources() {
    const { sources } = this.props

    if (sources == null) return null

    return sources.map((source, index) => {
      if (source.srcSet == null) return null

      return (
        <source
          key={`sources-${index}`}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      )
    })
  }

  render() {
    const { alt, src } = this.props
    const props = { alt, src }
    return (
      <picture>
        {this.renderSources()}
        <Img {...props} />
      </picture>
    )
  }
}

export default Picture
