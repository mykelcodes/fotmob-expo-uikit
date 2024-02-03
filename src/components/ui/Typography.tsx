import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import { BrandColors, TextVariant, TextWeight } from '@/components/ui-constants'

type Props = {
    children: ReactNode
    variant?: TextVariant
    weight?: TextWeight
} & TextProps

export function Typography({
    children,
    variant = 'body_md',
    weight = 'normal',
    style,
    ...restProps
}: Props) {
    return (
        <Text style={[styles.base, styles[variant], styles[weight], style]} {...restProps}>
            {children}
        </Text>
    )
}

const copyStyles: Record<TextVariant, object> = {
    headline_sm: {
        fontSize: 32,
        lineHeight: 38,
    },
    headline_xs: {
        fontSize: 28,
        lineHeight: 32,
    },
    body_xl: {
        fontSize: 20,
        lineHeight: 30,
    },
    body_lg: {
        fontSize: 18,
        lineHeight: 28,
    },
    body_md: {
        fontSize: 16,
        lineHeight: 18,
    },
    body_sm: {
        fontSize: 14,
        lineHeight: 20,
    },
    body_xs: {
        fontSize: 12,
        lineHeight: 18,
    },
}

const weightStyles: Record<TextWeight, object> = {
    // can include fontFamily for each weight here
    normal: {
        fontWeight: 'normal',
    },
    '600': {
        fontWeight: '600',
    },
    bold: {
        fontWeight: 'bold',
    },
}

const styles = StyleSheet.create({
    base: {
        color: BrandColors.black,
    },
    ...copyStyles,
    ...weightStyles,
})
