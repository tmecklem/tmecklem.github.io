/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-accent': 'var(--color-accent)',
        'theme-bg': 'var(--color-bg)',
        'theme-text': 'var(--color-text)',

        // Keep the named palettes for reference
        'warm-primary': '#FF6B6B',
        'warm-secondary': '#1A365D',
        'warm-accent': '#FFA07A',
        'warm-bg': '#FFF8F0',
        'warm-text': '#2D3748',

        'minimal-primary': '#84A98C',
        'minimal-secondary': '#2F3E46',
        'minimal-accent': '#52796F',
        'minimal-bg': '#F8F9FA',
        'minimal-text': '#354F52',

        'bold-primary': '#3B82F6',
        'bold-secondary': '#475569',
        'bold-accent': '#60A5FA',
        'bold-bg': '#F8FAFC',
        'bold-text': '#1E293B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.warm-primary'),
              '&:hover': {
                color: theme('colors.warm-accent'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
