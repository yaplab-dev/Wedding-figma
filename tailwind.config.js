/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '0a0a0a',
            cel: {
                0:'#5AA7A9',
                1: '#4B8B8D',
                2: '#3C6F71',
                3: '#2B5051'
            },
            blue: {
                0: '#34607F',
                1: '#294B64',
                2: '#1D3546',
            },
            cream: '#D9D9D9',
            red: '#ED2658',
            white: '#ffffff',
            orange: '#ED6842',
            black: '#000000',
            jk: '#EC5F5F',
            cerceta: '#00787C',
            ag: '#ABB1B0',
            dark: '#141414',
            grey: '#eaeaea',
            yellow: '#E2C400'
        },
        fontFamily: {
            'nohemi': ['Nohemi', 'sans-serif'],
            'fleuron': ['Fleuron', 'sans-serif'],
            'telegraf': ['Telegraf', 'sans-serif'],
            'telegraf-reg': ['Telegraf-Reg', 'sans-serif'],
            'telegraf-slant': ['Telegraf-Slant', 'sans-serif'],
            'neue-machina': ['Neue-Machina', 'sans-serif'],
            'nohemi-bold': ['Nohemi-Bold', 'sans-serif'],
            'nikkei-pacific': ['Nikei-Pacific', 'sans-serif']
        },
        extend: {
            cursor: {
                'eye': 'url(/img/bolzakojo.cur), default',
                'eye-point': 'url(/img/bolzakojo.cur), pointer',
                'white-dot': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><circle cx="16" cy="16" r="6" fill="white"/></svg>'), auto`,
                'black-dot': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><circle cx="16" cy="16" r="6" fill="black"/></svg>'), auto`            },
        }
    },
    plugins: [],
}
