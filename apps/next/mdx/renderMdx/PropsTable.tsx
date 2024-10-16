'use client'

import { Separator, SizableText, Stack, XStack, YStack } from '@my/ui'

const config = [
  {
    name: 'MnInput',
    params: [
      {
        name: 'Prop Name',
        type: 'Type',
        description: 'Description',
      },
      {
        name: 'iconLeft',
        type: 'IconProp',
        description: 'Render a left icon inside the button',
      },
      {
        name: 'iconRight',
        type: 'IconProp',
        description: 'Render a right icon inside the button',
      },
      {
        name: 'variant',
        type: 'outlined (default)',
        description: 'Inputs are outlined by default',
      },
      {
        name: 'roundedBorder',
        type: 'boolean',
        description: 'Add a small rounded border on corners',
      },
      {
        name: 'helperText',
        type: 'string',
        description: 'Add helper text under the input',
      },
      {
        name: 'errorText',
        type: 'string',
        description: 'Add an error message under the input',
      },
      {
        name: 'error',
        type: 'boolean',
        description: 'If true then input are red in color',
      },
    ],
  },
  {
    name: 'MnSearchbar',
    params: [
      {
        name: 'Prop Name',
        type: 'Type',
        description: 'Description',
      },
      {
        name: 'value',
        type: 'string (required)',
        description: 'Show value in search bar',
      },
      {
        name: 'onChangeText',
        type: '(text: string) => void',
        description: 'Function to update value in search bar',
      },
      {
        name: 'extends',
        type: 'MnInput',
        description: 'It extends all the props the MnInput',
      },
    ],
  },
  {
    name: 'Chip',
    params: [
      {
        name: 'Prop Name',
        type: 'Type',
        description: 'Description',
      },

      {
        name: 'extends',
        type: 'Chip (ChipProps) = Button (ButtonProps)',
        description: 'It extends all the props from Button',
      },
    ],
  },
  {
    name: 'MnButton',
    params: [
      {
        name: 'Prop Name',
        type: 'Type',
        description: 'Description',
      },
      {
        name: 'loading',
        type: 'boolean',
        description: 'Render a right (default) icon inside the button',
      },
      {
        name: 'loadingIcon',
        type: 'IconProps (default is spinner)',
        description: 'Render a right (default) loading icon inside the button',
      },
      {
        name: 'loadingIconAligment',
        type: '"left" | "right"',
        description: 'Render a right or left (default) loading icon inside the button',
      },
      {
        name: 'circled',
        type: 'boolean',
        description: 'If true than renders circular button',
      },
      {
        name: 'extends',
        type: 'Button (ButtonProps) = MnButton (MnButtonProps)',
        description: 'It extends all the props from Button',
      },
    ],
  },
]

const PropsTable = ({ id }: { id: string }) => {
  return (
    <>
      {config
        .filter((cg) => cg.name === id)
        .map((inputCfg) => {
          return (
            <YStack py="$4" key={inputCfg.name}>
              <SizableText fontWeight={700} color={'$accentColor'}>
                {inputCfg.name}
              </SizableText>
              <Separator />
              <YStack pt="$2">
                {inputCfg.params.map(({ name, type, description }, idx) => (
                  <Stack key={`${name}_${inputCfg.name}`}>
                    <XStack justifyContent="space-between">
                      {/* <Theme name={'yellow'}> */}
                      <SizableText
                        fontWeight={idx === 0 ? 700 : 100}
                        theme={'alt1'}
                        flexBasis={'30%'}
                        fontSize={idx === 0 ? '$2' : '$1'}
                      >
                        {name}
                      </SizableText>
                      <SizableText
                        fontWeight={idx === 0 ? 700 : 100}
                        fontSize={idx === 0 ? '$2' : '$1'}
                        theme={'alt1'}
                        flexBasis={'30%'}
                      >
                        {type}
                      </SizableText>
                      <SizableText
                        fontWeight={idx === 0 ? 700 : 100}
                        fontSize={idx === 0 ? '$2' : '$1'}
                        flex={1}
                        theme={'alt1'}
                        alignSelf="flex-end"
                      >
                        {description}
                      </SizableText>
                      {/* </Theme> */}
                    </XStack>
                    {idx === 0 && <Separator />}
                  </Stack>
                ))}
              </YStack>
            </YStack>
          )
        })}
    </>
  )
}

export default PropsTable
