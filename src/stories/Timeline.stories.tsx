import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "../components/timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the timeline section",
    },
    experiences: {
      control: "object",
      description: "Array of work experience entries to display",
    },
  },
};

type Story = StoryObj<typeof Timeline>;

const defaultExperiences = [
  {
    jobTitle: "Web Developer",
    company: "QuantumLeap Software",
    duration: "Jan 2025 - Present",
    summary:
      "As a key member of the product team, I contribute to the development of core features for our flagship SaaS platform, focusing on enhancing user experience and improving application performance.",
    achievements: [
      "Led the development of a new real-time analytics dashboard using Next.js and WebSockets.",
      "Optimized application load times by 30% through code splitting, lazy loading, and image optimization.",
      "Collaborated with UI/UX designers to translate complex Figma mockups into pixel-perfect, responsive components.",
      "Mentored a junior developer, providing code reviews and guidance on best practices.",
    ],
  },
  {
    jobTitle: "Junior Frontend Developer",
    company: "Digital Dreams Agency",
    duration: "Jun 2024 - Dec 2024",
    summary:
      "Developed and maintained responsive websites and web applications for a variety of clients, working within a fast-paced agency environment and collaborating closely with a team of developers and designers.",
    achievements: [
      "Successfully delivered 5+ client websites using React and Tailwind CSS.",
      "Implemented complex UI animations and interactive features based on client specifications.",
    ],
  },
];

export const Default: Story = {
  args: {
    title: "EXPERIENCE",
    experiences: defaultExperiences,
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0A192F",
      }}
    >
      <Timeline {...args} />
    </div>
  ),
};

export const SingleExperience: Story = {
  args: {
    title: "EXPERIENCE",
    experiences: [
      {
        jobTitle: "Senior Frontend Engineer",
        company: "Tech Innovations Inc.",
        duration: "Mar 2023 - Present",
        summary:
          "Leading frontend architecture decisions and mentoring a team of developers while building scalable web applications.",
        achievements: [
          "Architected and implemented a design system used across 10+ products.",
          "Reduced bundle size by 40% through strategic code splitting and tree shaking.",
          "Established CI/CD pipelines improving deployment frequency by 5x.",
        ],
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0A192F",
      }}
    >
      <Timeline {...args} />
    </div>
  ),
};

export const MultipleExperiences: Story = {
  args: {
    title: "WORK EXPERIENCE",
    experiences: [
      {
        jobTitle: "Lead Frontend Developer",
        company: "CloudScale Technologies",
        duration: "Jan 2024 - Present",
        summary:
          "Leading a team of 5 frontend developers in building enterprise-level applications with modern web technologies.",
        achievements: [
          "Introduced micro-frontend architecture, improving team productivity by 50%.",
          "Implemented comprehensive testing strategy achieving 90% code coverage.",
          "Reduced page load time by 45% through performance optimization initiatives.",
        ],
      },
      {
        jobTitle: "Frontend Developer",
        company: "StartupHub",
        duration: "Aug 2022 - Dec 2023",
        summary:
          "Developed and maintained multiple client-facing applications using React, TypeScript, and modern CSS frameworks.",
        achievements: [
          "Built 8+ production applications from scratch using React and TypeScript.",
          "Collaborated with backend team to design and implement RESTful APIs.",
          "Improved user engagement metrics by 35% through A/B testing and UI improvements.",
        ],
      },
      {
        jobTitle: "Junior Web Developer",
        company: "WebCraft Studio",
        duration: "Jun 2021 - Jul 2022",
        summary:
          "Started my career building responsive websites and learning modern web development practices in a collaborative environment.",
        achievements: [
          "Developed 15+ responsive websites for various clients.",
          "Learned and implemented modern JavaScript frameworks and libraries.",
          "Contributed to open-source projects and improved coding skills significantly.",
        ],
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0A192F",
      }}
    >
      <Timeline {...args} />
    </div>
  ),
};

export default meta;
