module.exports = {
  root: true,
  extends: '@react-native',
  files: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  rules: {
    'no-inline-style': ['off'],
    'no-unstable-nested-components': ['off'],
  },
};
