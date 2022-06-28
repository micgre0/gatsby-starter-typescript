import { render, screen } from '@testing-library/react'

import { IndexView } from '@features/IndexView'

describe('Index View', () => {
  describe('Render', () => {
    it('When everything is successful, then the "Hello World!" is present', () => {
      render(<IndexView />)

      expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })
  })
})
