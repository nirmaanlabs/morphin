'use client'

import { YStack } from '@my/ui'
import { Searchbar } from '@my/ui'
import DemoContainer from './DemoContainer'
import { useState } from 'react'

const DemoSearchbar = () => {
  const [query, setQuery] = useState('')

  return (
    <>
      <DemoContainer limit={1}>
        <YStack minHeight={250} overflow="hidden" gap="$4" margin="$3" padding="$2">
          <Searchbar
            value={query}
            onChangeText={(text) => {
              setQuery(text)
            }}
          />
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoSearchbar
