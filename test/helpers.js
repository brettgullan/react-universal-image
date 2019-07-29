/* global enzyme */

import React from 'react'
import renderer from 'react-test-renderer'

// ----------------------------------------------------------------------------

export function mount(component) {
  return enzyme.mount(component)
}

/**
 * Render the component (a React.createElement() or JSX expression)
 * into its intermediate object representation with 'type',
 * 'props', and 'children' keys
 *
 * The returned object can be matched with expect().toEqual(), e.g.
 *
 * ```js
 * expect(render(<Foo />)).toEqual(render(<div foo='bar' />))
 * ```
 */
export function render(component) {
  return renderer.create(mount(component)).toJSON()
}

/**
 * Get the HTML class names rendered by the component instance
 * as an array.
 *
 * ```js
 * expect(renderClasses(<div className='a b' />))
 *   .toEqual(['a', 'b'])
 * ```
 */
export function renderClasses(component) {
  const {
    props: { className },
  } = render(component)
  return className ? className.trim().split(' ') : []
}

/**
 * Returns true if a node renders with a single class.
 */
export function rendersClass(node, klass) {
  return renderClasses(node).includes(klass)
}

// ----------------------------------------------------------------------------

export function px(value) {
  return typeof value === 'number' ? `${value}px` : value
}
