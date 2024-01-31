export enum BrandColors {
    primary = '#00985F',
    white = '#FFFFFF',
    black = '#12060D',
    gray = '#F1F1F1',
    darkGray = '#B0ADAF',
    red = '#CA0000',
    primaryHover = '#00AE6D',
    primaryActive = '#008251',
    grayHover = '#F8F8F8',
    grayActive = '#E3E3E3',
    blackHover = '#261A21',
    blackActive = '#44383F',
}

export const TextVariants = {
    headline_sm: 'headline_sm',
    headline_xs: 'headline_xs',
    body_xl: 'body_xl',
    body_lg: 'body_lg',
    body_md: 'body_md',
    body_sm: 'body_sm',
    body_xs: 'body_xs',
} as const

export type TextVariant = (typeof TextVariants)[keyof typeof TextVariants]

export const TextWeights = ['normal', '600', 'bold'] as const

export type TextWeight = (typeof TextWeights)[number]
