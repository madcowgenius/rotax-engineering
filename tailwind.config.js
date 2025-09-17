/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate color palette
        'corporate-blue': '#1e3a8a', // Professional blue
        'corporate-blue-light': '#3b82f6', // Lighter corporate blue
        'corporate-blue-dark': '#1e40af', // Darker corporate blue
        'corporate-gray': '#374151', // Professional gray
        'corporate-gray-light': '#6b7280', // Lighter gray
        'corporate-gray-dark': '#1f2937', // Darker gray
        'accent-orange': '#ea580c', // Professional orange accent
        'accent-orange-light': '#fb923c', // Lighter orange
        'accent-gold': '#d97706', // Gold accent for premium feel
        'accent-yellow': '#fbbf24', // Bright yellow brand color
        'accent-yellow-light': '#fcd34d', // Lighter yellow
        'accent-yellow-dark': '#f59e0b', // Darker yellow
        'text-primary': '#111827', // Almost black for headings
        'text-secondary': '#4b5563', // Gray for body text
        'text-muted': '#9ca3af', // Muted text
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 64, 175, 0.9) 50%, rgba(59, 130, 246, 0.85) 100%)',
        'corporate-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'section-gradient': 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.9) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'corporate': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'corporate-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
