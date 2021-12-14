export const colors = [
    'primary',
    'secondary',
    'blue-grey',
    'basic-grey',
    'basic-coral',
    'additional-positive',
    'additional-warning',
    'additional-light',
    'additional-dark',
] as const;

export type TColor = typeof colors[number];

export const saturation = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
] as const;

export type TSaturation = typeof saturation[number];