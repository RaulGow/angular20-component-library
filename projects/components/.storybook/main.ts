import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-designs",
    "@storybook/addon-a11y",
    "storybook-addon-preview/register",
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;
