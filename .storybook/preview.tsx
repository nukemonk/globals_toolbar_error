import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";

const light = createTheme({
  palette: {
    mode: "light",
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

const themes = {
  light,
  dark,
};

const preview: Preview = {
  decorators: [
    (Story, { globals }) => {
      // let DocsThemeWrapper: any = Fragment;
      // const docsThemeWrapperProps = {};
      // const CustomThemeProvider = title.startsWith('Components/Pro/')
      //   ? ThemeProviderPro
      //   : ThemeProvider;
      // // All stories that are page only (no Canvas/Story components) get "Page" as story name.
      // // if (context.story === 'Page') {
      // //   DocsThemeWrapper = MuiThemeProvider;
      // //   docsThemeWrapperProps.theme = generateDocsTheme;
      // // }

      return (
        <ThemeProvider theme={themes[globals.muiTheme]}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  globalTypes: {
    muiTheme: {
      type: "string",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        items: [
          { value: "dark", title: "🌚 dark theme" },
          { value: "light", title: "🌝 light theme" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
