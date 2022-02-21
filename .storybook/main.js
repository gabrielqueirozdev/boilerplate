module.exports = {
  "staticDirs": ["../public"],
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions"
  ],
  "framework": "@storybook/react"
}
