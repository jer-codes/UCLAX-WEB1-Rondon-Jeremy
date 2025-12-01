const breakpoints = {
    medium: 800,
    large: 1200,
};

export const theme = {
    cssMedia: {
        isSmall: `(max-width: ${breakpoints.medium - 1}px)`,
        isMediumAndUp: `(min-width: ${breakpoints.medium}px)`,
        isMedium: `(min-width: ${breakpoints.medium}px) and (max-width: ${
            breakpoints.large - 1
        }px)`,
        isLarge: `(min-width: ${breakpoints.large}px)`,
    },
    fonts: {
        default: "'Helvetica Neue', sans-serif",
    },
    fontWeights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
    },
    colors: {
        primary: {
            default: "#0A3D91",
            medium: "#1E5FBF",
            light: "#AFCBF5",
            dark: "#062A66",
        },
        secondary: {
            default: "#F0F4FA",
            light: "#FFFFFF",
            dark: "#8A9BB2",
        },
        messaging: {
            success: { color: "#000", bgColor: "#C9F7D4" },
            error: { color: "#000", bgColor: "#F8B4A1" },
        },
    },
};
