import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

const meta: Meta = {
  title: "Pages/Portfolio",
  tags: ["autodocs"],
};

type Story = StoryObj;

export const FullPage: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
      }}
    >
      <Header />
      <Hero
        greeting="HI, I'M"
        name="Andrii Ponomarienko"
        description="FRONTEND DEVELOPER FOCUSED ON SCALABLE ARCHITECTURE, CLEAN STRUCTURE, CLEAR UX AND PERFORMANCE."
        cvButtonLabel="Download CV"
      />
    </div>
  ),
};

export default meta;
