// __tests__/index.test.jsx

import { fireEvent, queryByRole, queryAllByRole, render, screen, waitFor } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /big apple ipsum/i,
    })

    expect(heading).toBeInTheDocument()
  })
  it('has the expected heading text', () => {
    render(<Home />)

    const head1 = screen.queryByTestId('h1')
    
    expect(head1.innerHTML).toEqual("Big Apple Ipsum")
  })
  describe('renders the expected form', () => {
    beforeAll(() => {
      render(<Home />)
    })
    
    it('has a sentence/paragraph switch', () => {
      const lSent = screen.queryByText("sentences")
      const lPara = screen.queryByText("paragraphs")
      
      expect(lSent).toBeInTheDocument()
      expect(lPara).toBeInTheDocument()
      
      const rSent = screen.queryByLabelText("sentences")
      const rPara = screen.queryByLabelText("paragraphs")
      
      expect(rSent).toHaveAttribute('type', 'radio')
      expect(rPara).toHaveAttribute('type', 'radio')
    })
  })
  describe('initial state', () => {
    beforeAll(() => {
      render(<Home />)
    })
    
    it('defaults to 3 sentences', () => {
      const howMany = screen.queryByRole('spinbutton', {name: /how many/})
      expect(howMany.value).toBe("3")
    })
  })

  describe('setting options', () => {
    beforeEach(() => {
      render(<Home />)
    })
    
    it('can change number of sentences', () => {
      const howMany = screen.queryByRole('spinbutton', {name: /how many/})
      fireEvent.change(howMany, { target: {value: "5"}})
      expect(howMany.value).toBe("5")
    })
    it('can switch between paragraphs and sentences', () => {
      const lPara = screen.queryByLabelText("paragraphs")
      const lSent = screen.queryByLabelText("sentences")
      fireEvent.click(lPara)
      expect(lPara.value).toBe("paragraphs")
      fireEvent.click(lSent)
      expect(lSent.value).toBe("sentences")
    })
  })

  describe('regenerate button', () => {
    beforeEach(() => {
      render(<Home />)
    })
    
    it('the button changes the lipsum text', () => {
      const regen = screen.getByRole('button', {name: /Regenerate/})
      const lipsum = screen.queryByTestId('lipsum')
      const lipsumText = lipsum.textContent
      fireEvent.click(regen)
      const newLipsumText = lipsum.textContent
      expect(newLipsumText).not.toEqual(lipsumText)
    })
  })
})
