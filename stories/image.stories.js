import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import Image from '../src/components/Image'
import Picture from '../src/components/Picture'

import { Box } from '../src/theme/styled'
import { fitImage } from '../src/components/Image/styled'

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
      'https://picsum.photos/id/1015/240/240 240w',
      'https://picsum.photos/id/1015/320/320 320w',
      'https://picsum.photos/id/1015/375/375 375w',
      'https://picsum.photos/id/1015/414/414 414w',
      'https://picsum.photos/id/1015/576/576 576w',
      'https://picsum.photos/id/1015/640/640 640w',
      'https://picsum.photos/id/1015/1152/1152 1152w',
    ].join(','),
    media: '(max-width: 576px)',
  },
  {
    srcSet: [
      'https://picsum.photos/id/1015/640/480 640w',
      'https://picsum.photos/id/1015/768/576 768w',
      'https://picsum.photos/id/1015/1152/864 1152w',
    ].join(','),
    media: '(max-width: 768px)',
  },
  {
    srcSet: [
      'https://picsum.photos/id/1015/1280/720 1280w',
      'https://picsum.photos/id/1015/1600/900 1600w',
    ].join(','),
    media: '(min-width: 768px)',
  },
]

//-----------------------------------------------------------------------------

storiesOf('Image', module)
  .add('image', () => <Image src="https://picsum.photos/id/128/640/360" />)
  .add('image width:auto', () => (
    <Image src="https://picsum.photos/id/128/640/360" width={'auto'} />
  ))
  .add('responsive', () => (
    <Image src="https://picsum.photos/id/128/640/360" srcSet={srcset} />
  ))
  .add('lazy image', () => (
    <Image src="https://picsum.photos/id/128/640/360" lazy={true} />
  ))
  .add('lazy image with LQIP', () => (
    <Image
      src="https://picsum.photos/id/128/640/360"
      lazy={true}
      placeholder="https://picsum.photos/id/128/32/18"
    />
  ))
  .add('lazy responsive', () => (
    <Image
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
    />
  ))
  .add('lazy responsive with LQIP', () => (
    <Image
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
      placeholder="https://picsum.photos/id/128/32/18"
    />
  ))
  .add('lazy responsive lqip block', () => (
    <Box width={1} height={400} position={'relative'} overflow={'hidden'}>
      <Image
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

storiesOf('Picture', module)
  .add('simple image', () => (
    <Picture src="https://picsum.photos/id/1015/720/405" />
  ))
  .add('lazy image', () => (
    <Picture src="https://picsum.photos/id/1015/720/405" lazy={true} />
  ))
  .add('lazy responsive image', () => (
    <Picture
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
    />
  ))
  .add('lazy responsive image with lqip', () => (
    <Picture
      src="https://picsum.photos/id/128/640/360"
      srcSet={srcset}
      lazy={true}
      placeholder="https://picsum.photos/id/128/64/36"
    />
  ))
  .add('picture', () => (
    <Picture src="https://picsum.photos/id/1015/640/360" sources={sources} />
  ))
  .add('lazy picture', () => (
    <Picture
      src="https://picsum.photos/id/1015/640/360"
      sources={sources}
      lazy={true}
    />
  ))
  .add('lazy picture with lqip', () => (
    <Picture
      src="https://picsum.photos/id/1015/640/360"
      sources={sources}
      lazy={true}
      placeholder="https://picsum.photos/id/1015/32/18"
    />
  ))
