import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

// #region Data
const education = [
  {
    title: "Bachelor of Computer Science/Bachelor of Games & Interactivity",
    institute: "Swinburne University of Technology",
    instituteLink: "https://www.swinburne.edu.au",
    time: "Expected Dec 2025",
    description: "Double degree, major in Software Development",
    achievements: [
      "GPA 3.95/4.0 - High Distinction",
      "IntegraDev excellence award (2023)",
    ],
  },
];

const experience = [
  {
    title: "Unity Developer (part-time)",
    company: "Codiland",
    companyLink: "https://codiland.com",
    time: "Nov 2022 - Present",
    responsibilities:
      "Designed and prototyped core mechanics for proprietary game ideas in Unity.",
  },
  {
    title: "After-hour instructor (casual)",
    company: "Junior Engineers",
    companyLink: "https://www.juniorengineers.com.au",
    time: "Aug - Sep 2022",
    responsibilities: "Teach basic coding principles to primary students.",
  },
];

const skills = [
  {
    title: "Games Programmer",
    skills: [
      "Unity/C# programming",
      "Familiarity with 3D rendering pipeline - experience with custom shaders/VFX",
      "Version control (SVN)",
    ],
  },
  {
    title: "Web Developer",
    skills: [
      "JS/TS (React) + CSS/styled-components/Tailwind",
      "Backend development (Node.js/Express) + database (MySQL)",
      "Version control (Git)",
    ],
  },
  {
    title: "Producer/Project Manager",
    skills: [
      "Agile/Scrum project management (Jira Software)",
      "Leadership & resources coordination",
      "Communication & conflict resolution",
    ],
  },
];

const projects = [
  {
    title: "Rift & Sync (capstone game)",
    url: "https://rift-n-sync.github.io",
    roles: "Director/Lead Programmer/Producer",
    highlights: [
      "Developed custom physics system with specialized behaviors",
      "Iterative level prototyping with ProBuilder",
      "Conducted playtests & feedback gathering",
    ],
  },
  {
    title: "Afterlight (capstone game)",
    url: "https://afterlight-game.github.io",
    roles: "Lead Programmer/Optimization Engineer",
    highlights: [
      "Implemented mesh-shadow projection system",
      "Concurrent Jobs to optimize for real-time performance",
      "Developed custom HLSL shaders in Unity's built-in pipeline",
    ],
  },
];
// #endregion

export const Resume: React.FC = () => {
  // #region Initial animation
  const [hasInit, setHasInit] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInit(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  // #endregion

  return (
    <div
      className="flex min-h-[calc(100vh-80px)] flex-col 
        items-center justify-center 
        bg-backgroundDark p-3 text-center
        sm:space-y-6 md:flex-row md:space-x-16 md:space-y-0 md:p-6 md:text-left"
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-4 font-header text-3xl font-bold text-primary md:text-4xl">
          Resume
        </h1>

        {
          // #region Experience
          <div className="mb-6">
            <h2 className="mb-2 font-header text-xl font-semibold text-primary md:text-2xl">
              Experience
            </h2>
            <div className="space-y-2 text-primaryVariant">
              {experience.map((xp, index) => (
                <div key={index} className="mb-4 md:mb-2">
                  <h3 className="font-header text-lg font-medium">
                    {xp.title} -{" "}
                    <a
                      href={xp.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-normal text-accent hover:font-semibold hover:text-primary"
                    >
                      {xp.company}
                    </a>
                  </h3>
                  <h4 className="font-body text-lg text-secondary">
                    {xp.time}
                  </h4>
                  <p className="text-left font-body font-light">
                    {xp.responsibilities}
                  </p>
                </div>
              ))}
            </div>
          </div>
          //#endregion
        }

        {
          // #region Skills
          <div className="mb-6">
            <h2 className="mb-2 font-header text-xl font-semibold text-primary md:text-2xl">
              Skills
            </h2>
            {skills.map((skill, index) => (
              <div key={`${skill.title}-${index}`} className="mb-4 md:mb-2">
                <h3 className="font-header text-lg font-medium text-secondary">
                  {skill.title}
                </h3>
                <ul className="list-inside list-disc text-left font-body font-light text-primaryVariant">
                  {skill.skills.map((specialization, index) => (
                    <li key={index} className="">
                      {specialization}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          // #endregion
        }

        {
          // #region Education
          <div className="mb-6">
            <h2 className="mb-2 font-header text-xl font-semibold text-primary md:text-2xl">
              Education
            </h2>
            <div className="space-y-2 text-primaryVariant">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-header text-lg font-medium">
                    {edu.title}
                  </h3>
                  <a
                    href={edu.instituteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:font-semibold hover:text-primary"
                  >
                    <h3 className="inline-block font-header text-lg">
                      {edu.institute}
                    </h3>
                  </a>
                  <h4 className="font-body text-lg text-secondary">
                    {edu.time}
                  </h4>
                  <p className="text-left font-body font-light">
                    {edu.description}
                  </p>
                  <ul className="list-inside list-disc text-left">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="font-body text-sm font-thin">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          // #endregion
        }

        {
          // #region Projects
          <div className="mb-6">
            <h2 className="mb-2 font-header text-xl font-semibold text-primary md:text-2xl">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="mb-4 md:mb-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:font-semibold hover:text-primary"
                >
                  <h3 className="inline-block font-header text-lg">
                    {project.title}
                  </h3>
                </a>
                <h4 className="font-body text-lg text-secondary">
                  {project.roles}
                </h4>
                <ul className="list-inside list-disc text-left font-body font-light text-primaryVariant">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          // #endregion
        }
      </div>

      {
        //#region Download button
        <a
          className={`${hasInit ? "right-4 md:right-8" : "-right-12"} 
            group fixed bottom-4
            flex size-12 items-center justify-center overflow-hidden 
            rounded-full bg-accent text-primary 
            transition-all duration-300 
            hover:w-48 hover:bg-primary hover:pl-4 hover:text-secondary 
            md:bottom-8 `}
          href="d/Aly Ly - Resume.pdf"
          download="Aly Ly - Resume.pdf"
          aria-label="Download Resume as PDF"
        >
          <FaDownload
            className="absolute left-[18px] text-xl 
              transition-all duration-300
              group-hover:left-[26px]"
          />
          <span
            className="absolute -right-32 whitespace-nowrap 
              transition-all duration-300
              group-hover:right-[26px]"
          >
            Download as PDF
          </span>
        </a>
        // #endregion
      }
    </div>
  );
};
