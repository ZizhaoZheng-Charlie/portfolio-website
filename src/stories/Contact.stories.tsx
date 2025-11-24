import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from "../components/contact";

const meta: Meta<typeof ContactSection> = {
  title: "Components/Contact",
  component: ContactSection,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0a1a1f",
      }}
    >
      <ContactSection />
    </div>
  ),
};

export const WithElectricTrail: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0a1a1f",
        position: "relative",
      }}
    >
      <ContactSection />
    </div>
  ),
};

export default meta;
