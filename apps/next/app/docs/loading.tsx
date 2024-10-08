'use client'

import { Spinner, XStack, YStack } from 'tamagui'

export function LoadingSpinner() {
  return (
    <XStack
      padding="$3"
      alignItems="center"
      justifyContent="center"
      className="spinner-container"
      flex={1}
    >
      <Spinner size="large" color="$green10" />
    </XStack>
  )
}

export default LoadingSpinner
