import { HomeScreen } from './screens/HomeScreen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Morphin',
        }}
      />
      <HomeScreen />
    </>
  )
}
