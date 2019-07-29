import React, { PureComponent } from 'react'

// ----------------------------------------------------------------------------

import { Img, Picture as PictureElement } from '../base'

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
      <PictureElement>
        {this.renderSources()}
        <Img {...props} />
      </PictureElement>
    )
  }
}

export default Picture
