'use client'

import { Chip, MnButton, MnInput, Searchbar, Theme, XStack, YStack } from '@my/ui'
import { Edit3, Ghost, GlassWater, Joystick, User2 } from '@tamagui/lucide-icons'
import { useState } from 'react'
import DemoContainer from './DemoContainer'

const catBreed = [
  'Abyssinian',
  'American Shorthair',
  'Balinese',
  'Bengal',
  'Birman',
  'British Shorthair',
  'Burmese',
  'Chartreux',
  'Cornish Rex',
  'Devon Rex',
  'Egyptian Mau',
  'Exotic Shorthair',
  'Himalayan',
  'Japanese Bobtail',
  'Korat',
  'Maine Coon',
  'Manx',
  'Norwegian Forest Cat',
  'Ocicat',
  'Oriental Shorthair',
  'Persian',
  'Ragdoll',
  'Russian Blue',
  'Scottish Fold',
  'Siamese',
  'Siberian',
  'Singapura',
  'Somali',
  'Sphynx',
  'Tonkinese',
  'Turkish Angora',
  'Turkish Van',
]

const MainPageDemo = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <DemoContainer limit={2}>
        <YStack minHeight={250} overflow="hidden" gap="$4" margin="$3" padding="$2" maxWidth={900}>
          <XStack gap={'$4'}>
            <MnButton loading>Loading</MnButton>
            <MnButton icon={GlassWater}>Drink</MnButton>
            <MnButton iconAfter={Ghost} chromeless>
              Ghost
            </MnButton>
            <MnButton iconAfter={Edit3} square size={'$true'} elevation={3} />
            <MnButton iconAfter={Edit3} square size={'$6'} elevation={3} />
            <MnButton iconAfter={Edit3} square size={'$8'} elevation={3} />
            <MnButton icon={Joystick} circular size={'$true'} />
            <MnButton icon={Joystick} circular size={'$6'} elevation={3} />
            <MnButton icon={Joystick} circular size={'$8'} elevation={3} />
          </XStack>
          <XStack gap={'$4'}>
            <MnInput placeholder="Name" placeholderTextColor={'$gray8'} />
            <MnInput iconLeft={User2} />
            <MnInput errorText="password must be altest 8 character" error />
          </XStack>

          <XStack gap={'$4'} flexWrap="wrap">
            <Searchbar
              value={query}
              onChangeText={(text) => {
                setQuery(text)
              }}
              placeholder="Search cats breed"
              placeholderTextColor={'$gray8'}
            />

            <XStack gap="$2" flexWrap="wrap" flexShrink={'unset'} flexBasis={'100%'}>
              <Theme name="yellow">
                {catBreed
                  .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
                  .map((name) => (
                    <Chip key={name} borderRadius={'$8'} fontSize={10}>
                      # {name}{' '}
                    </Chip>
                  ))}
              </Theme>
            </XStack>
          </XStack>
        </YStack>
      </DemoContainer>
    </>
  )
}

export default MainPageDemo
