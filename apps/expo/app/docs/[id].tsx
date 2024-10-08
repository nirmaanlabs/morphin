import { Stack } from 'expo-router'
import { useParams } from 'solito/navigation'
import { Demo } from '../screens/Demo'

export default function Screen() {
  const { id } = useParams()
  return (
    <>
      <Stack.Screen
        options={{
          title: id as string,
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <Demo id={id as string} />
    </>
  )
}
