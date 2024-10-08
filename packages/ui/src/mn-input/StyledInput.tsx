import { styled, Input } from 'tamagui'

export const StyledInput = styled(Input, {
  borderColor: 'transparent',
  flex: 1,

  focusVisibleStyle: {
    outlineColor: '$outlineColor',
    outlineWidth: 0,
    outlineStyle: 'solid',
  },
  focusStyle: {
    borderColor: 'transparent',
  },
  hoverStyle: {
    borderColor: 'transparent',
  },
})
