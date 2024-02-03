import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { BrandColors } from '@/components/ui-constants'

type Props = {
    label: string
    onClearText?: () => void
} & Omit<TextInput['props'], 'style'>

export function InputField({ label, onClearText, ...props }: Props) {
    const [isFocused, setIsFocused] = useState(false)

    const animLabelStyle = useAnimatedStyle(() => ({
        top: withTiming(isFocused ? 11 : 21),
        fontSize: withTiming(isFocused ? 14 : 16),
    }))

    const animInputContainerStyle = useAnimatedStyle(() => ({
        bottom: withTiming(isFocused ? 11 : 21),
    }))

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Animated.View style={[styles.inputContainer, animInputContainerStyle]}>
                    <TextInput
                        {...props}
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(Boolean(e.nativeEvent.text))
                        }}
                        onChangeText={(text) => {
                            if (!isFocused) setIsFocused(true)
                            props.onChangeText?.(text)
                        }}
                        placeholder={label}
                        placeholderTextColor="transparent"
                        underlineColorAndroid="transparent"
                        cursorColor={BrandColors.black}
                        style={styles.input}
                    />
                </Animated.View>
                <Animated.Text style={[styles.label, animLabelStyle]}>{label}</Animated.Text>
            </View>
            {onClearText && (
                <Pressable onPress={onClearText}>
                    <Ionicons name="close-outline" size={24} color={BrandColors.black} />
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 60,
        backgroundColor: BrandColors.gray,
        borderRadius: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        height: 60,
        position: 'relative',
        flex: 1,
        width: '100%',
    },
    inputContainer: {
        position: 'absolute',
        zIndex: 20,
    },
    input: {
        fontSize: 16,
        lineHeight: 18,
        backgroundColor: 'transparent',
        color: BrandColors.black,
        zIndex: 10,
    },
    label: {
        position: 'absolute',
        opacity: 0.4,
        color: BrandColors.black,
    },
})
