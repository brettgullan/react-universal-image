import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import Image from '../src/components/Image'
import Picture from '../src/components/Picture'
import LazyImage from '../src/components/LazyImage'
import LazyPicture from '../src/components/LazyPicture'

//-----------------------------------------------------------------------------

storiesOf('Image', module)
  .add('basic', () => <Image src="https://picsum.photos/640/360" />)
  .add('responsive', () => (
    <Image
      src="https://picsum.photos/id/128/640/360"
      srcSet={
        'https://picsum.photos/id/128/240/135 240w, https://picsum.photos/id/128/320/180 320w, https://picsum.photos/id/128/640/360 640w, https://picsum.photos/id/128/1280/720 12800w'
      }
    />
  ))

//-----------------------------------------------------------------------------

const sources = [
  {
    srcSet:
      'https://picsum.photos/id/128/240/240 240w, https://picsum.photos/id/128/320/320 320w, https://picsum.photos/id/128/375/375 375w, https://picsum.photos/id/128/414/414 414w',
    media: '(max-width: 576px)',
  },
  {
    srcSet:
      'https://picsum.photos/id/128/640/320 640w, https://picsum.photos/id/128/768/384 768w,',
    media: '(max-width: 768px)',
  },
  {
    srcSet: 'https://picsum.photos/id/128/1280/720 1280w',
    media: '(min-width: 768px)',
  },
]

storiesOf('Picture', module).add('basic', () => (
  <Picture src="https://picsum.photos/320/180" sources={sources} />
))

//-----------------------------------------------------------------------------

storiesOf('LazyPicture', module)
  .add('basic', () => (
    <LazyPicture
      src="https://picsum.photos/id/128/32/18"
      sources={sources}
      lazy={false}
    />
  ))
  .add('lazy', () => (
    <LazyPicture
      src="https://picsum.photos/id/128/32/18"
      sources={sources}
      lazy={true}
    />
  ))

//-----------------------------------------------------------------------------

storiesOf('LazyImage', module)
  .add('basic', () => <LazyImage src="https://picsum.photos/id/128/640/360" />)
  .add('responsive', () => (
    <LazyImage
      src="https://picsum.photos/id/128/640/360"
      srcSet={
        'https://picsum.photos/id/128/240/135 240w, https://picsum.photos/id/128/320/180 320w, https://picsum.photos/id/128/640/360 640w, https://picsum.photos/id/128/1280/720 12800w'
      }
    />
  ))
  .add('with LQIP', () => (
    <LazyImage
      placeholder="https://picsum.photos/id/128/32/18"
      src="https://picsum.photos/id/128/640/360"
      srcSet={
        'https://picsum.photos/id/128/240/135 240w, https://picsum.photos/id/128/320/180 320w, https://picsum.photos/id/128/640/360 640w, https://picsum.photos/id/128/1280/720 12800w'
      }
    />
  ))
