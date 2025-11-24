import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "../components/nav";
import type { NavItem } from "../types/portfolio";

const meta: Meta<typeof Nav> = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Nav>;

const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about", isActive: true },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact me", href: "#contact", isButton: true },
];

export const Default: Story = {
  args: {
    items: defaultNavItems,
  },
  render: (args) => (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        background: "#0a192f",
        minHeight: "100px",
      }}
    >
      <Nav {...args} />
    </div>
  ),
};

export const AllActive: Story = {
  args: {
    items: defaultNavItems.map((item) => ({ ...item, isActive: true })),
  },
  render: (args) => (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        background: "#0a192f",
        minHeight: "100px",
      }}
    >
      <Nav {...args} />
    </div>
  ),
};

export const AllButtons: Story = {
  args: {
    items: defaultNavItems.map((item) => ({ ...item, isButton: true })),
  },
  render: (args) => (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        background: "#0a192f",
        minHeight: "100px",
      }}
    >
      <Nav {...args} />
    </div>
  ),
};

export const Minimal: Story = {
  args: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  render: (args) => (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        background: "#0a192f",
        minHeight: "100px",
      }}
    >
      <Nav {...args} />
    </div>
  ),
};

export default meta;
