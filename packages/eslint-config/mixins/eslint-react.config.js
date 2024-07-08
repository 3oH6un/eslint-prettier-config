import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import query from '@tanstack/eslint-plugin-query';
import testingLibrary from 'eslint-plugin-testing-library';

export default {
    plugins: {
        react,
        'react-refresh': reactRefresh,
        'jsx-a11y': jsxA11y,
        '@tanstack/eslint-plugin-query': query,
        'testing-library': testingLibrary,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@tanstack/eslint-plugin-query/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
            rules: {
                'react-refresh/only-export-components': 'off',
            },
        },
    ],
    rules: {
        'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        'jsx-a11y/alt-text': [
            'warn',
            {
                elements: ['img'],
            },
        ],
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'react/no-unknown-property': 'off',
        'react/prop-types': 'off',
    },
};