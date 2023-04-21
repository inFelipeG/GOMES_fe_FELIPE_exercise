export const sizesAndSpace = {
    0: '0px',
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '32px',
    7: '64px',
    8: '128px',
    9: '256px',
    10: '512px',
    11: '1024px',
};

export const theme = {
    colors: {
        gray100: '#f3f4f6',
        gray200: '#e5e7eb',
        gray400: '#9ca3af',
        gray500: '#6b7280',
        gray900: '#111827',
        green50: '#f0fdf4',
        green200: '#bbf7d0',
        green700: '#15803d',
        white: '#ffffff',
    },
    fonts: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    fontSizes: {
        xs: '0.750rem' /* 12px */,
        sm: '0.875rem' /* 14px */,
        xl: '1.875rem' /* 36px */,
    },
    fontWeights: {
        medium: 500,
        bold: 700,
    },
    lineHeights: {
        xs: '1.3333333' /* 16px / 12px */,
        sm: '1.4285714' /* 20px / 14px */,
        xl: '1.2000000' /* 36px / 30px */,
    },
    radii: {
        base: '8px',
        full: '999999999rem',
    },
    shadows: {
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    },
    sizes: sizesAndSpace,
    space: sizesAndSpace,
};

export type Theme = typeof theme;
