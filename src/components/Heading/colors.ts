export const colors = [
    'primary',
    'blue-grey',
    'dark',
] as const;

export type TColor = typeof colors[number];