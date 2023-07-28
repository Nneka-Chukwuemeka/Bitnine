/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			padding: {
				pmobile: '1rem',
			},
			fontFamily: {
				sans: ['Inter', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
