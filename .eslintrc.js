module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    }
};