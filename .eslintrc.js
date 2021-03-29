{
    extends: [
        'airbnb/hooks',
        'plugin:jest/recommended',
    ],
    plugins: ['react', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "no-console": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
    },
};