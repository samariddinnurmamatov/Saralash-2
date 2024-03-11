module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// {
//   "env": {
//     "node": true,
//     "browser": true,
//     "es2021": true
//   },
//   "extends": ["eslint:recommended", "plugin:react/recommended"],
//   "overrides": [],
//   "parserOptions": {
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "plugins": ["prettier"],
//   "rules": {
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ],
//     "jsx-a11y/href-no-hash": [0],
//     "jsx-a11y/aria-props": [0],
//     "jsx-a11y/role-has-required-aria-props": [0],
//     "default-case": "off",
//     "react-hooks/exhaustive-deps": "off",
//     "no-console": "warn",
//     "no-empty": "warn",
//     "no-useless-constructor": "off",
//     "react/jsx-uses-react": "off",
//     "react/display-name": "off",
//     "react/react-in-jsx-scope": "off",
//     "no-empty-function": "warn",
//     "react/prop-types": "off",
//     "react/no-children-prop": "off",
//     "no-unused-vars": "warn",
//     "react/no-unescaped-entities": "off"
//   }
// }
