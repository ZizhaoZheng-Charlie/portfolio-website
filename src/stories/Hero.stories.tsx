import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "../components/hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    greeting: {
      control: "text",
      description: "The greeting text displayed above the name",
    },
    name: {
      control: "text",
      description: "The main name/title displayed prominently",
    },
    description: {
      control: "text",
      description: "The description text below the name",
    },
    cvButtonLabel: {
      control: "text",
      description: "The label for the CV download button",
    },
  },
};

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    greeting: "HI, I'M",
    name: "Andrii Ponomarienko",
    description:
      "FRONTEND DEVELOPER FOCUSED ON SCALABLE ARCHITECTURE, CLEAN STRUCTURE, CLEAR UX AND PERFORMANCE.",
    cvButtonLabel: "Download CV",
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
      }}
    >
      <Hero {...args} />
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    greeting: "WELCOME",
    name: "John Doe",
    description:
      "FULL-STACK DEVELOPER SPECIALIZING IN MODERN WEB TECHNOLOGIES AND CLOUD ARCHITECTURE.",
    cvButtonLabel: "View Resume",
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
      }}
    >
      <Hero {...args} />
    </div>
  ),
};

export const ShortDescription: Story = {
  args: {
    greeting: "HELLO",
    name: "Jane Smith",
    description: "CREATIVE DEVELOPER BUILDING BEAUTIFUL DIGITAL EXPERIENCES.",
    cvButtonLabel: "Get in Touch",
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
      }}
    >
      <Hero {...args} />
    </div>
  ),
};

export const LongDescription: Story = {
  args: {
    greeting: "HI THERE",
    name: "Alex Johnson",
    description:
      "SENIOR SOFTWARE ENGINEER WITH OVER 10 YEARS OF EXPERIENCE IN BUILDING SCALABLE WEB APPLICATIONS. PASSIONATE ABOUT CLEAN CODE, TEST-DRIVEN DEVELOPMENT, AND CREATING INTUITIVE USER EXPERIENCES THAT DELIGHT USERS AND DRIVE BUSINESS VALUE.",
    cvButtonLabel: "Download Portfolio",
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #050a15)",
      }}
    >
      <Hero {...args} />
    </div>
  ),
};

export default meta;
