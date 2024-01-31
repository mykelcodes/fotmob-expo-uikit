import { Pressable, StyleSheet, Text, View } from 'react-native'

import { BrandColors } from '@/components/ui-constants'

type Props = {
    type?: 'primary' | 'secondary' | 'tertiary'
    title: string
    onPress?: () => void
}

export function Button({ type = 'primary', title, onPress }: Props) {
    return (
        <Pressable onPress={onPress} disabled={!onPress}>
            {(state) => {
                const { pressed, hovered } = state as PressableState

                return (
                    <View
                        style={[
                            styles.container,
                            styles[type],
                            hovered && styles[`${type}Hovered`],
                            pressed && styles[`${type}Active`],
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                type === 'secondary' && styles.secondaryText,
                            ]}
                        >
                            {title}
                        </Text>
                    </View>
                )
            }}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        borderRadius: 999,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primary: {
        backgroundColor: BrandColors.primary,
    },
    primaryHovered: {
        backgroundColor: BrandColors.primaryHover,
    },
    primaryActive: {
        backgroundColor: BrandColors.primaryActive,
    },
    secondary: {
        backgroundColor: BrandColors.gray,
    },
    secondaryHovered: {
        backgroundColor: BrandColors.grayHover,
    },
    secondaryActive: {
        backgroundColor: BrandColors.grayActive,
    },
    tertiary: {
        backgroundColor: BrandColors.black,
    },
    tertiaryHovered: {
        backgroundColor: BrandColors.blackHover,
    },
    tertiaryActive: {
        backgroundColor: BrandColors.blackActive,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: BrandColors.white,
    },
    secondaryText: {
        color: BrandColors.black,
    },
})

type PressableState = {
    pressed: boolean
    hovered: boolean
}
