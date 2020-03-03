module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "react/prefer-stateless-function": 0,
    "no-unused-vars": 0,
    "semi": "error",
    "react/no-unused-state": 0
  },
  parser: "babel-eslint"
}