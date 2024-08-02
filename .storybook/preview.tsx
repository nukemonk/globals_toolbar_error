import React from "react";
import { Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import { useGlobals } from "@storybook/preview-api";

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
    (Story) => {
      const [globals, setGlobals] = useGlobals();

      return (
        <ThemeProvider theme={themes[globals.muiTheme]}>
          <Stack spacing={4}>
            <Button
              onClick={() => {
                setGlobals({
                  muiTheme: globals.muiTheme === "dark" ? "light" : "dark",
                });
              }}
            >
              Change theme from here without issue
            </Button>
            <Story />
          </Stack>
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
        title: "Change theme here with issue",
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
