/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': '"Rubik", sans-serif',
            },
            fontSize: {
                '2xs': '0.625rem',
                '3xs': '0.5rem',
            },
            lineHeight: {
                'base': '1.75',
                'base-sm': '1.714',
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
            ringWidth: {
                '5': '5px',
                '6': '6px'
            },
            width: {
                '13': '3.25rem'
            },
            height: {
                '13': '3.25rem'
            },
            margin: {
                '15': '3.75rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '19': '4.75rem'
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}