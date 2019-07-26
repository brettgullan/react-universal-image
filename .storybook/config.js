import React, { Fragment } from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'

//-----------------------------------------------------------------------------

// Automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
const loadStories = () => req.keys().forEach(req)

// ----------------------------------------------------------------------------
// DECORATORS

// Styled Components Theme
addDecorator((story) => <Fragment>{story()}</Fragment>)

// Background colours
addParameters({
  backgrounds: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Page', value: '#EEEEEE', default: true },
    { name: 'Black', value: '#000000' },
  ],
})

// ----------------------------------------------------------------------------

configure(loadStories, module)
