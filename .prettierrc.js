module.exports = {
  semi: true,                       // Add semicolons at the end of statements
  trailingComma: 'all',             // Add trailing commas wherever possible
  singleQuote: true,                // Use single quotes instead of double quotes
  printWidth: 100,                  // Wrap lines at 100 characters
  tabWidth: 2,                      // Use 2 spaces per tab
  plugins: ['prettier-plugin-tailwindcss'], // Enables Tailwind CSS plugin
  arrowParens: 'avoid',             // Avoid parentheses for single-argument arrow functions
  proseWrap: 'preserve',            // Don't wrap markdown text by default
  bracketSameLine: false,           // Move closing bracket of JSX to the next line
};
