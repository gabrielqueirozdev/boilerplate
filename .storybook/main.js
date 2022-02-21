module.exports = {
  "staticDirs": ["../public"],
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}
