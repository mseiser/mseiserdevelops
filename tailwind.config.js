/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                generalsans: ['General Sans', 'sans-serif'],
            },
            colors: {
                primary: "hsl(var(--primary))",
                background: "hsl(var(--background))",
                text: "hsl(var(--text))",
            },
            backgroundImage: {
                terminal: "url('/assets/terminal.png')",
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};

