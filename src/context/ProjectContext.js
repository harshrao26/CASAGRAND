"use client";

import { createContext, useContext, useState, useRef } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCity, setFilterCity] = useState("All");
  const [filterPriceRange, setFilterPriceRange] = useState([0, 500]); // in Lakhs
  const [filtersApplied, setFiltersApplied] = useState(false);
  const propertiesSectionRef = useRef(null);

  const scrollToProperties = () => {
    if (propertiesSectionRef.current) {
      propertiesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const applyFilters = ({ city, priceRange }) => {
    setFilterCity(city);
    setFilterPriceRange(priceRange);
    setFiltersApplied(true);
    // Scroll to properties section
    setTimeout(() => {
      if (propertiesSectionRef.current) {
        propertiesSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const clearFilters = () => {
    setFilterCity("All");
    setFilterPriceRange([0, 500]);
    setFiltersApplied(false);
  };

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        scrollToProperties,
        propertiesSectionRef,
        filterCity,
        filterPriceRange,
        filtersApplied,
        applyFilters,
        clearFilters,
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
