import { Alert, Pressable, Text } from 'react-native'

export function Button() {
    return (
        <Pressable onPress={() => Alert.alert('Button press')}>
            <Text>Click me</Text>
        </Pressable>
    )
}
