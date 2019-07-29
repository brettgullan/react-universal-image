/* global enzyme */

import React from 'react'

import { px, render } from './helpers'

// ----------------------------------------------------------------------------

import Image from '../src/components/Image'

// ----------------------------------------------------------------------------

const srcSet = 'a.jpg 320w, b.jpg 640w, c.jpg 1280w'

// ----------------------------------------------------------------------------

describe('Image component', () => {
  describe('Basic Image', () => {
    it('passes through the src prop', () => {
      const component = render(<Image src="universal.png" alt="" />)
      expect(component.props.src).toEqual('universal.png')
      expect(component.props.alt).toEqual('')
    })

    it('passes through the srcSet prop', () => {
      const component = render(<Image src="a.png" srcSet={srcSet} />)
      expect(component.props.src).toEqual('a.png')
      expect(component.props.srcSet).toEqual(srcSet)
    })

    it('omits the alt prop if not provided', () => {
      const component = render(<Image src="universal.png" />)
      expect(component.props.alt).toBeUndefined()
    })

    it('respects layout props', () => {
      const component = render(<Image src="primer.png" m={20} p={10} />)
      expect(component).toHaveStyleRule('margin', px(20))
      expect(component).toHaveStyleRule('padding', px(10))
    })

    it('placeholder is ignored when not lazy', () => {
      const component = render(
        <Image src="universal.png" placeholder="ignored.png" />,
      )
      expect(component.props.src).toEqual('universal.png')
    })
  })

  describe('Lazy Image', () => {
    it('src prop converts to lazy', () => {
      const component = render(<Image src="universal.png" lazy={true} />)
      expect(component.props['data-src']).toEqual('universal.png')
      expect(component.props.src).toBeUndefined()
    })

    it('srcSet prop converts to lazy', () => {
      const component = render(<Image srcSet={srcSet} lazy={true} />)
      expect(component.props['data-srcset']).toEqual(srcSet)
      expect(component.props.srcSet).toBeUndefined()
    })

    it('placeholer prop renders as src', () => {
      const component = render(
        <Image src="universal.png" placeholder="andromeda.png" lazy={true} />,
      )
      expect(component.props.src).toEqual('andromeda.png')
    })
  })
})
