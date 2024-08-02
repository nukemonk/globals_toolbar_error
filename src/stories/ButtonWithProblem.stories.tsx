import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button with problem",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: () => (
    <Box>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Hello</Button>
      ))}
    </Box>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Box>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Hello</Button>
      ))}
    </Box>
  ),
};

export const Large: Story = {
  render: () => (
    <Box>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Hello</Button>
      ))}
    </Box>
  ),
};

export const Small: Story = {
  render: () => (
    <Box>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Hello</Button>
      ))}
    </Box>
  ),
};
