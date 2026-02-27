/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '16px',
  			lg: '24px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#EFD830',
  			background: 'hsl(var(--background))',
  			text: '#111111',
  			textInvert: '#FFFFFF',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			cardSoft: '#C8B5FC',
  			success: '#12B76A',
  			warning: '#F59E0B',
  			error: '#EF4444',
  			bg31: '#241352',
  			bg32: '#4D3398',
  			bg33: '#1E1A2B',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			gradientBg3: 'radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)',
  			gradientFooter: 'linear-gradient(135deg, #E1D6FF 0%, #7441FF 100%)',
  			gradientBrand: 'linear-gradient(135deg, #7441FF 0%, #11EDA4 50%, #EFD830 100%)'
  		},
  		fontSize: {
  			h1: [
  				'44px',
  				{
  					lineHeight: '1.1',
  					fontWeight: '800'
  				}
  			],
  			h2: [
  				'32px',
  				{
  					lineHeight: '1.15',
  					fontWeight: '800'
  				}
  			],
  			h3: [
  				'24px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '800'
  				}
  			],
  			h4: [
  				'20px',
  				{
  					lineHeight: '1.25',
  					fontWeight: '800'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '1.6',
  					fontWeight: '800'
  				}
  			],
  			caption: [
  				'14px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '800'
  				}
  			],
  			micro: [
  				'12px',
  				{
  					lineHeight: '1.35',
  					fontWeight: '800'
  				}
  			]
  		},
  		spacing: {
  			'1': '4px',
  			'2': '8px',
  			'3': '12px',
  			'4': '16px',
  			'6': '24px',
  			'8': '32px',
  			'12': '48px',
  			'16': '64px'
  		},
  		margin: {
  			'section-sm': '24px',
  			'section-md': '32px',
  			'section-lg': '48px',
  			'section-xl': '64px'
  		},
  		padding: {
  			'section-sm': '24px',
  			'section-md': '32px',
  			'section-lg': '48px',
  			'section-xl': '64px'
  		},
  		boxShadow: {
  			soft: '0 4px 10px rgba(0,0,0,0.1)'
  		},
  		borderRadius: {
  			card: '16px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

  plugins: [require("tailwindcss-animate")],
};
