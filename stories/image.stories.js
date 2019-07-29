import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import Image from '../src/components/Image'
import Picture from '../src/components/Picture'
import LazyImage from '../src/components/LazyImage'
import LazyPicture from '../src/components/LazyPicture'

import { Box } from '../src/theme/styled'
import { fitImage } from '../src/components/LazyImage/styled'

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

const srcset = [
  'https://picsum.photos/id/128/240/135 240w',
  'https://picsum.photos/id/128/320/180 320w',
  'https://picsum.photos/id/128/640/360 640w',
  'https://picsum.photos/id/128/1280/720 1280w',
].join(',')

const sources = [
  {
    srcSet: [
      'https://picsum.photos/id/128/240/240 240w',
      'https://picsum.photos/id/128/320/320 320w',
      'https://picsum.photos/id/128/375/375 375w',
      'https://picsum.photos/id/128/414/414 414w',
    ].join(','),
    media: '(max-width: 576px)',
  },
  {
    srcSet: [
      'https://picsum.photos/id/128/640/480 640w',
      'https://picsum.photos/id/128/768/576 768w',
      'https://picsum.photos/id/128/1152/864 1152w',
    ].join(','),
    media: '(max-width: 768px)',
  },
  {
    srcSet: [
      'https://picsum.photos/id/128/1280/720 1280w',
      'https://picsum.photos/id/128/1600/900 1600w',
    ].join(','),
    media: '(min-width: 768px)',
  },
]

//-----------------------------------------------------------------------------

storiesOf('Picture', module).add('basic', () => (
  <Picture src="https://picsum.photos/320/180" sources={sources} />
))

//-----------------------------------------------------------------------------

storiesOf('LazyImage', module)
  .add('image', () => <LazyImage src="https://picsum.photos/id/128/640/360" />)
  .add('responsive', () => (
    <LazyImage src="https://picsum.photos/id/128/640/360" srcSet={srcset} />
  ))
  .add('lazy image', () => (
    <LazyImage src="https://picsum.photos/id/128/640/360" lazy={true} />
  ))
  .add('lazy image with LQIP', () => (
    <LazyImage
      src="https://picsum.photos/id/128/640/360"
      lazy={true}
      placeholder="https://picsum.photos/id/128/32/18"
    />
  ))
  .add('lazy responsive', () => (
    <LazyImage
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
    />
  ))
  .add('lazy responsive with LQIP', () => (
    <LazyImage
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
      placeholder="https://picsum.photos/id/128/32/18"
    />
  ))
  .add('lazy responsive lqip block', () => (
    <Box width={1} height={400} position={'relative'}>
      <LazyImage
        src="https://picsum.photos/id/128/640/360"
        srcSet={srcset}
        lazy={true}
        placeholder="https://picsum.photos/id/128/32/18"
        css={fitImage}
      />
      <Box
        position={'absolute'}
        width={1}
        height={'100%'}
        top={0}
        left={0}
        zIndex={1}
      />
    </Box>
  ))

//-----------------------------------------------------------------------------

storiesOf('LazyPicture', module)
  .add('simple image', () => (
    <LazyPicture src="https://picsum.photos/id/128/720/405" />
  ))
  .add('lazy image', () => (
    <LazyPicture src="https://picsum.photos/id/128/720/405" lazy={true} />
  ))
  .add('lazy responsive image', () => (
    <LazyPicture
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
    />
  ))
  .add('picture', () => (
    <LazyPicture src="https://picsum.photos/id/128/640/360" sources={sources} />
  ))
  .add('lazy picture', () => (
    <LazyPicture
      src="https://picsum.photos/id/128/640/360"
      sources={sources}
      lazy={true}
    />
  ))
  .add('lazy picture with lqip', () => (
    <LazyPicture
      src="https://picsum.photos/id/128/640/360"
      sources={sources}
      lazy={true}
      placeholder="https://picsum.photos/id/128/32/18"
    />
  ))
