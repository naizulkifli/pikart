module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'warn',
    'react/prop-types': "off",
    'react/self-closing-comp': 'warn',
    'padding-line-between-statements': [
+      'error',
+      {'blankLine': 'always', 'prev': '*', 'next': 'return'},
+      {'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
+      {'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']}
    ],
  "import/order": ["warn", {
          "pathGroups": [{
          "pattern": "~/**",
          "group": "external",
          "position": "after"
          }],
  "newlines-between": "always-and-inside-groups"
          }],
  "react/jsx-sort-props": [
      +      "warn",
      +      {
             "callbacksLast": true,
             "shorthandFirst": true,
           "noSortAlphabetically": false,
           "reservedFirst": true
            }
        ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: {
    'plugin:react/jsx-runtime': any,
  },
  "emmet.excludeLanguages": [],
    "emmet.includeLanguages": {
        "markdown": "html",
        "javascript": "javascriptreact",
        "typescript": "typescriptreact"
    },
    "emmet.showSuggestionsAsSnippets": true,
    "emmet.triggerExpansionOnTab": true,
    "files.exclude": {
        "**/*.js.map": {
            "when": "$(basename)"
        },
        "**/node_modules": true,
    },
    "html.autoClosingTags": true,
    "javascript.autoClosingTags": true,
    "javascript.suggest.completeFunctionCalls": true,
    "typescript.suggest.completeFunctionCalls": true,
    "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
    "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
    "javascript.inlayHints.parameterNames.enabled": "all",
    "typescript.inlayHints.parameterNames.enabled": "all",
    "javascript.suggest.autoImports": true,
    "search.exclude": {
        "**/coverage": true,
        "**/node_modules": true
    },
    "typescript.autoClosingTags": true,
    "typescript.suggest.autoImports": true,
    "editor.formatOnSave": true,
    "javascript.format.enable": false,
    "javascript.validate.enable": true,
    "typescript.format.enable": false,
    "typescript.validate.enable": true,
}


