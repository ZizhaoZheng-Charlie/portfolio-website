import type { Meta, StoryObj } from "@storybook/react";
import { Project } from "../components/project";

const meta: Meta<typeof Project> = {
  title: "Components/Project",
  component: Project,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the section",
    },
    introduction: {
      control: "text",
      description: "The introductory statement below the title",
    },
    projects: {
      control: "object",
      description: "Array of project items to display in the grid",
    },
  },
};

type Story = StoryObj<typeof Project>;

const defaultProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a scalable e-commerce solution with React, TypeScript, and Node.js. Implemented real-time inventory management, payment processing, and admin dashboard with comprehensive analytics.",
  },
  {
    title: "Task Management App",
    description:
      "Developed a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features using modern web technologies.",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard for data visualization with custom charts, filters, and export capabilities. Optimized for performance with large datasets.",
  },
  {
    title: "Mobile-First Web App",
    description:
      "Designed and developed a responsive web application with mobile-first approach, ensuring optimal user experience across all device sizes and screen resolutions.",
  },
  {
    title: "API Integration Service",
    description:
      "Built a robust API integration service that connects multiple third-party services, handles webhooks, and provides a unified interface for data synchronization.",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat application with WebSocket support, message encryption, file sharing, and presence indicators for seamless communication.",
  },
];

export const Default: Story = {
  args: {
    title: "PROJECT",
    introduction:
      "I care less about specific frameworks and more about how the UI, state, schemas and backend fit together into a predictable system.",
    projects: defaultProjects,
  },
  render: (args) => (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#0A192F",
      }}
    >
      <Project {...args} />
    </div>
  ),
};

export const CustomProjects: Story = {
  args: {
    title: "PROJECT",
    introduction:
      "A collection of projects showcasing modern web development practices and innovative solutions.",
    projects: [
      {
        title: "Frontend Architecture",
        description:
          "Building SPAs on solid fundamentals – rendering model, reactivity, routing, composition – and organizing code so features, not files, drive structure.",
      },
      {
        title: "Complex UI Flows",
        description:
          "Turning messy requirements into clear, predictable UI states: empty, loading, success, error, thinking in flows, not screens.",
      },
      {
        title: "State Management",
        description:
          "Designing state as a single source of truth (Pinia / store patterns), where components just render the store instead of improvising their own logic.",
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
      <Project {...args} />
    </div>
  ),
};

export const FewerProjects: Story = {
  args: {
    title: "PROJECT",
    introduction:
      "Selected projects demonstrating expertise in modern web development.",
    projects: [
      {
        title: "Full-Stack Application",
        description:
          "End-to-end application development with React frontend, Node.js backend, and PostgreSQL database.",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized web application performance, reducing load times by 60% through code splitting, lazy loading, and efficient state management.",
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
      <Project {...args} />
    </div>
  ),
};

export default meta;
