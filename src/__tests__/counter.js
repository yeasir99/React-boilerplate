import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../Counter'

test('App', () => {
  render(<Counter />)

  const increment = screen.getByRole('button', { name: /increment/i })
  const decrement = screen.getByRole('button', { name: /decrement/i })

  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('0')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('0')
})
