import {FlatCompat} from '@eslint/eslintrc';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import {profile as webAppProfile} from '@rushstack/eslint-config/profile/web-app';

const compat = new FlatCompat();

export default [
    ...compat.extends('@rushstack/eslint-config/profile/web-app'),
    {
        plugins: {
            'no-relative-import-paths': noRelativeImportPaths,
        },
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
        settings: {
            // Add any common settings here
        },
    },
];