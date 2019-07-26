import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import Image from '../src/components/Image'
import LazyImage from '../src/components/LazyImage'

//-----------------------------------------------------------------------------

storiesOf('Image', module).add('basic', () => (
  <Image src="https://picsum.photos/640/360" />
))

storiesOf('LazyImage', module).add('basic', () => (
  <LazyImage src="https://picsum.photos/id/128/640/360" />
))
