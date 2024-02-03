import { Stack } from 'expo-router'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'

export default function AppLayout() {
    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Stack />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
})
