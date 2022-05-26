module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '0px',

            'md': '768px',

            'lg': '1024px',

        },
        extend: {
            height: {
                '128': '32rem',
                '144': '36rem',
                '192': '48rem',
                '256': '64rem',
                '512': '128rem',
            }
        }
    },
    plugins: [],
}