import type { Meta, StoryObj } from "@storybook/react";
import { ElectricTrail } from "../components/ElectricTrail";

const meta: Meta<typeof ElectricTrail> = {
  title: "Components/ElectricTrail",
  component: ElectricTrail,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ElectricTrail>;

export const Default: Story = {
  args: {
    color: "#00BFFF",
    trailLength: 20,
    intensity: 35,
    enabled: true,
  },
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh", background: "#0a0a0a" }}>
      <ElectricTrail {...args} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1>Move your mouse to see the electric trail</h1>
      </div>
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    color: "#FF00FF",
    trailLength: 30,
    intensity: 50,
    enabled: true,
  },
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh", background: "#0a0a0a" }}>
      <ElectricTrail {...args} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1>Magenta Electric Trail</h1>
      </div>
    </div>
  ),
};

export default meta;
