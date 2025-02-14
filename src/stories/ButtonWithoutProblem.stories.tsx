import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button without problem",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: () => <Button>Hello</Button>,
};

export const Secondary: Story = {
  render: () => <Button>Hello</Button>,
};
