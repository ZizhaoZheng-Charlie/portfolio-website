import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
        position: "relative",
      }}
    >
      <Header />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>Scroll to see the fixed header</p>
      </div>
    </div>
  ),
};

export default meta;
