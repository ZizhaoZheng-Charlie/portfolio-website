import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Project } from "./components/project";
import { Timeline } from "./components/timeline";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";
import type { ProjectItem, WorkExperience } from "./types/portfolio";
import projectsData from "./assets/projects.json";
import experiencesData from "./assets/experiences.json";

const projects: ProjectItem[] = projectsData.projects;
const experiences: WorkExperience[] = experiencesData.experiences;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] via-[#0a1a1f] to-[#050a15]">
      <Header />
      <Hero
        greeting="HI, I'M"
        name="Zizhao Zheng"
        description="FULL STACK DEVELOPER FOCUSED ON SCALABLE ARCHITECTURE, CLEAN STRUCTURE, CLEAR UX AND PERFORMANCE."
        cvButtonLabel="Download CV"
      />
      <Project
        title="PROJECT"
        introduction="I care less about specific frameworks and more about how the UI, state, schemas and backend fit together into a predictable system."
        projects={projects}
      />
      <Timeline title="EXPERIENCE" experiences={experiences} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
