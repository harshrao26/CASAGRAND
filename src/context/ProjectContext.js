"use client";

import { createContext, useContext, useState, useRef } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const propertiesSectionRef = useRef(null);

  const scrollToProperties = () => {
    if (propertiesSectionRef.current) {
      propertiesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        scrollToProperties,
        propertiesSectionRef,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within ProjectProvider");
  }
  return context;
}
