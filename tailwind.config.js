module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    variants: {
        extend: {
            borderWidth: ['hover', 'focus', 'focus-within'],
            textColor: ['disabled'],
            backgroundColor: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
    theme: {
        extend: {},
    },
};
