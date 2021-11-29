import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../Counter'

test('App', () => {
  const { container } = render(<Counter />)

  const [increment, decrement] = container.querySelectorAll('button')

  const messageDiv = container.firstChild.querySelector('div')

  expect(messageDiv).toHaveTextContent('0')

  fireEvent.click(increment)
  expect(messageDiv).toHaveTextContent('1')

  fireEvent.click(decrement)
  expect(messageDiv).toHaveTextContent('0')
})
