import type { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "./NavLink";

const meta = {
  title: "UI/Atoms/NavLink",
  component: NavLink,
  tags: ["autodocs"],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Click me",
  },
};
