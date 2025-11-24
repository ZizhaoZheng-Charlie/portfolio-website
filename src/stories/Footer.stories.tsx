import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../components/footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0A192F, #0a1a1f, #050a15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Footer />
    </div>
  ),
};

export default meta;

