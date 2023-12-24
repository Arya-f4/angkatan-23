const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {

	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],

	theme: {
		fontFamily: {
			sans: ['var(--font-inter)', ...fontFamily.sans],
		},
		extend: {

			colors: {
				transparent: "transparent",
				agility: "#222",
				primary: {
					100: "#B6E3FF",
					200: "#9DCDF1",
					300: "#8BC1F1",
					400: "#71ADE7",
					500: "#5B94D8",
					600: "#4282C1",
					700: "#4282D8",
					800: "#2156A7",
					900: "#1B5D99",
				},
				secondary: {
					100: "#7c8ba1",
					200: "#667892",
					300: "#506582",
					400: "#3a5173",
					500: "#243E63",
					600: "#203859",
					700: "#1d324f",
					800: "#192b45",
					900: "#16253b",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
};
