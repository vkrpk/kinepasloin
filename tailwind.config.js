/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1e3d59',
                secondary: '#f5f0e1',
                fluo: '#ff6e40',
                clair: '#ffc13b',
            },
            container: {
                padding: {
                    DEFAULT: '1rem',
                    sm: '1rem',
                    lg: '1rem',
                    xl: '1rem',
                    '2xl': '1rem',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
