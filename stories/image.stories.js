import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import Image from '../src/components/Image'

//-----------------------------------------------------------------------------

storiesOf('Image', module).add('basic', () => (
  <Image src="https://picsum.photos/640/360" />
))
