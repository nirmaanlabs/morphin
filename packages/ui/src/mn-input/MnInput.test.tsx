// // // import { render, screen, fireEvent } from '@testing-library/react'
// // // import { MnInput } from './MnInput'
// // // import { Stack } from 'tamagui'
// // // import { describe, it, expect, vi } from 'vitest'

// // // // Mock props for the MnInput component
// // // const defaultProps = {
// // //   value: 'initial value',
// // //   onChange: vi.fn(),
// // //   onFocus: vi.fn(),
// // //   onBlur: vi.fn(),
// // //   iconLeft: null,
// // //   iconRight: null,
// // //   error: false,
// // //   helperText: 'This is a helper text',
// // // }

// // // describe('MnInput Component', () => {
// // //   it('sss', () => {
// // //     render(<Stack />)
// // //   })
// // //   // it('should render the input with initial value', () => {
// // //   //   render(<MnInput {...defaultProps} />)
// // //   //   const inputElement = screen.getByTestId('mn-input') as HTMLInputElement
// // //   //   expect(inputElement).toBeInTheDocument()
// // //   //   expect(inputElement.value).toBe('initial value')
// // //   // })
// // //   // it('should trigger onFocus and onBlur events', () => {
// // //   //   render(<MnInput {...defaultProps} />)
// // //   //   const inputElement = screen.getByTestId('mn-input')
// // //   //   fireEvent.focus(inputElement)
// // //   //   expect(defaultProps.onFocus).toHaveBeenCalled()
// // //   //   fireEvent.blur(inputElement)
// // //   //   expect(defaultProps.onBlur).toHaveBeenCalled()
// // //   // })
// // //   // it('should display helper text when provided', () => {
// // //   //   render(<MnInput {...defaultProps} />)
// // //   //   const helperText = screen.getByText('This is a helper text')
// // //   //   expect(helperText).toBeInTheDocument()
// // //   // })
// // //   // it('should apply error styles when error prop is true', () => {
// // //   //   const errorProps = { ...defaultProps, error: true, errorText: 'Error occurred!' }
// // //   //   render(<MnInput {...errorProps} />)
// // //   //   const errorText = screen.getByText('Error occurred!')
// // //   //   expect(errorText).toBeInTheDocument()
// // //   //   // Check for any error styling
// // //   //   const inputElement = screen.getByTestId('mn-input')
// // //   //   expect(inputElement).toHaveStyle({ borderColor: 'red' }) // Example check
// // //   // })
// // // })

// import { render, fireEvent } from '@testing-library/react-native'
// import { MnInput } from './MnInput' // adjust the path as needed
// import { describe, expect, test, vi } from 'vitest'

// // Test for the MnInput component in a React Native environment
// describe('MnInput component (React Native)', () => {
//   test('renders correctly with default props', () => {
//     const { getByTestId } = render(<MnInput value="test" onChangeText={vi.fn()} />)
//     expect(getByTestId('mn-input')).toBeTruthy()
//   })

//   test('handles focus and blur events', () => {
//     const handleFocus = vi.fn()
//     const handleBlur = vi.fn()

//     const { getByTestId } = render(
//       <MnInput value="test" onChangeText={vi.fn()} onFocus={handleFocus} onBlur={handleBlur} />
//     )

//     const input = getByTestId('mn-input')

//     fireEvent(input, 'focus')
//     expect(handleFocus).toHaveBeenCalled()

//     fireEvent(input, 'blur')
//     expect(handleBlur).toHaveBeenCalled()
//   })

//   test('displays error text', () => {
//     const { getByText } = render(
//       <MnInput value="test" error={true} errorText="Error occurred" onChangeText={vi.fn()} />
//     )
//     expect(getByText(/error occurred/i)).toBeTruthy()
//   })

//   // test('renders left and right icons', () => {
//   //   const mockIconLeft = <span testID="left-icon">Left</span>
//   //   const mockIconRight = <span testID="right-icon">Right</span>

//   //   const { getByTestId } = render(
//   //     <MnInput
//   //       value="test"
//   //       onChangeText={vi.fn()}
//   //       iconLeft={mockIconLeft}
//   //       iconRight={mockIconRight}
//   //     />
//   //   )

//   //   expect(getByTestId('left-icon')).toBeTruthy()
//   //   expect(getByTestId('right-icon')).toBeTruthy()
//   // })
// })
