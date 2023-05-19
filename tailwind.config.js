/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'vs-blue-4':'#132F49',
        'vs-blue-3':'#317AC6',
        'vs-blue-2':'#5997DC',
        'vs-blue-1':'#A7D9F6',
        
        'vs-gray-6':'#1E1E1E',
        'vs-gray-5':'#252526',
        'vs-gray-4':'#2C2D2D',
        'vs-gray-3':'#333333',
        'vs-gray-2':'#3C3C3C',
        
        'vs-white-2':'#A9AAA9',
        'vs-white-1':'#C6C7C6',
        
        'vs-green':'#67925B',
        'vs-purple':'#AA7ECC',
        'vs-yellow':'#DBD4A9'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        vscode: ['Inconsolata', 'sans-serif']
      },
    },
  },
  plugins: [],
}
