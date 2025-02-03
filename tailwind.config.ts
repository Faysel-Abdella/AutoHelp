import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			lora: [
  				'var(--font-lora)',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			secondaryBackground: 'var(--secondary-background)',
  			foreground: 'hsl(var(--foreground))',
  			mainBlue: 'var(--primary-blue)',
  			mainGray: 'var(--primary-gray)',
  			lavenderLight: 'var(--lavender-light)',
  			lavenderLighter: 'var(--lavender-lighter)',
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			mainGradient: 'var(--main-gradient)'
  		},
  		dropShadow: {
  			main: 'var(--primary-drop-shadow)',
  			secondary: 'var(--secondary-drop-shadow)',
  			card: 'var(--card-drop-shadow)',
  			statistics: 'var(--statistics-drop-shadow)',
  			dataCard: 'var(--data-card-drop-shadow)',
  			step: 'var(--step-drop-shadow)',
  			bonus: 'var(--bonus-drop-shadow)'
  		},
  		borderColor: {
  			main: 'var(--main-border)',
  			secondary: 'var(--secondary-border)',
  			card: 'var(--main-card)'
  		},
  		borderWidth: {
  			light: 'var(--border-light)'
  		},
  		borderRadius: {
  			large: 'var(--radius-large)',
  			larger: 'var(--radius-larger)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
