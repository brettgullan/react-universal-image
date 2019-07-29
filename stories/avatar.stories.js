import React from 'react'
import { storiesOf } from '@storybook/react'

//-----------------------------------------------------------------------------

import { Box } from '../src/components/base'
import Image from '../src/components/Image'

//-----------------------------------------------------------------------------

const srcset = [
  'https://i.pravatar.cc/128?img=12 128w',
  'https://i.pravatar.cc/256?img=12 256w',
  'https://i.pravatar.cc/384?img=12 384w',
  'https://i.pravatar.cc/512?img=12 512w',
].join(',')

//-----------------------------------------------------------------------------

storiesOf('Avatar', module)
  .add('basic', () => (
    <div>
      <Image src="https://i.pravatar.cc/150?img=12" width={150} />
      <Image
        src="https://i.pravatar.cc/150?img=12"
        width={150}
        borderRadius={'50%'}
      />
    </div>
  ))
  .add('responsive', () => (
    <Image src="https://i.pravatar.cc/128?img=12" srcSet={srcset} width={256} />
  ))
  .add('lazy', () => (
    <Image
      placeholder="https://i.pravatar.cc/16?img=12"
      srcSet={srcset}
      width={256}
      lazy={true}
      borderRadius={'50%'}
    />
  ))
  .add('lazy clipped', () => (
    <Box display={'inline-block'} overflow={'hidden'} borderRadius={'50%'}>
      <Image
        placeholder="https://i.pravatar.cc/16?img=12"
        srcSet={srcset}
        width={256}
        lazy={true}
      />
    </Box>
  ))

//-----------------------------------------------------------------------------
