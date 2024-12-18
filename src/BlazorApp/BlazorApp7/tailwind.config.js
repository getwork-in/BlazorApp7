/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
    /*darkMode: ['selector', '[data-mode="dark"]'],*/
    darkMode: ['selector'],
    content: [
        "./**/*.{razor,html,cshtml,cs}",
        "./../BlazorApp7.Client/**/*.{razor,html,cshtml,cs}",

        "!./node_modules",
        "!./../node_modules/**",

        "./../../BuildingBlocks/BuildingBlocks.UIComponents/**/*.{razor,html,cshtml,cs}"
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            maxWidth: {
                '8xl': '90rem', // Example: 85rem = 1360px
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                //sans: ["var(--font-geist-sans)", ...fontFamily.sans],
                //mono: ["var(--font-mono)", ...fontFamily.mono],
            },
            colors: {
                danger: 'rgb(153 27 27)',
                success: 'rgb(22 101 52)',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                ringColor: {
                    DEFAULT: 'hsl(var(--ring))', // Customize to match your theme
                },
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
        },
  },
    plugins: [],
}

