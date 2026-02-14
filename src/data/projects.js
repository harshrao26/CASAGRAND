// Project data organized by project name
export const PROJECTS_DATA = {
  Mercury: {
    name: "Casagrand Mercury",
    region: "North Chennai",
    location: "North Chennai",
    price: "₹58 Lakhs",
    amenities: "60+ Lifestyle Amenities",
    image: "/images/Mercury/City%20view%20Aerial%201_tiff.webp",
    description:
      "Premium residential project in North Chennai with modern amenities",
  },
  Elysium: {
    name: "Casagrand Elysium",
    region: "West Chennai",
    location: "West Chennai",
    price: "₹75 Lakhs",
    amenities: "75+ Lifestyle Amenities",
    image: "/images/Elysium/image.png",
    description: "Premium living spaces with world-class amenities",
  },
  Massimo: {
    name: "Casagrand Massimo",
    region: "West Chennai",
    location: "West Chennai",
    price: "₹68 Lakhs",
    amenities: "65+ Lifestyle Amenities",
    image: "/images/Massimo/3402_Kundrathur_Casa_Grand_Chennai_Image_22.jpg",
    description: "Modern apartments with exceptional facilities",
  },
  Osaka: {
    name: "Casagrand Osaka",
    region: "West Chennai",
    location: "West Chennai",
    price: "₹71 Lakhs",
    amenities: "72+ Lifestyle Amenities",
    image: "/images/Osaka/Copy%20of%20Shot_29_Building%20Facade.jpg",
    description: "Japanese-inspired design with modern comfort",
  },
  Reva: {
    name: "Casagrand Reva",
    region: "West Chennai",
    location: "West Chennai",
    price: "₹69 Lakhs",
    amenities: "68+ Lifestyle Amenities",
    image: "/images/Reva/Elevation%20View.jpg",
    description: "Contemporary homes with excellent connectivity",
  },
  Hola: {
    name: "Casagrand Hola Chennai",
    region: "OMR",
    location: "OMR",
    price: "₹82 Lakhs",
    amenities: "85+ Lifestyle Amenities",
    image: "/images/Hola/Villa%20Day.jpg",
    description: "Premium residences on the IT corridor",
  },
  Flagship: {
    name: "Casagrand Flagship",
    region: "OMR",
    location: "OMR",
    price: "₹88 Lakhs",
    amenities: "90+ Lifestyle Amenities",
    image: "/images/Flagship/image.png",
    description: "Flagship project with state-of-the-art facilities",
  },
  Jarvis: {
    name: "Casagrand Jarvis",
    region: "OMR",
    location: "OMR",
    price: "₹81 Lakhs",
    amenities: "80+ Lifestyle Amenities",
    image: "/images/Jarvis/AREIAL%20NIGHT%20VIEW_Hires_V01.webp",
    description: "Smart homes with advanced technology",
  },
  Madelyn: {
    name: "Casagrand Madelyn",
    region: "GST",
    location: "GST Road",
    price: "₹67 Lakhs",
    amenities: "72+ Lifestyle Amenities",
    image: "/images/Madelyn/Copy%20of%20Aerial%20day.jpg",
    description: "Modern residences with excellent amenities",
  },
  Primrose: {
    name: "Casagrand Primrose",
    region: "GST",
    location: "GST Road",
    price: "₹70 Lakhs",
    amenities: "75+ Lifestyle Amenities",
    image: "/images/Primrose/CG%20PRIMROSE%20ELEVATION-01.jpg",
    description: "Premium homes with garden views",
  },
};

// Get all projects as an array
export const getAllProjects = () => {
  return Object.keys(PROJECTS_DATA).map((key) => ({
    id: key,
    ...PROJECTS_DATA[key],
  }));
};

// Get projects by region
export const getProjectsByRegion = (region) => {
  return Object.keys(PROJECTS_DATA)
    .filter((key) => PROJECTS_DATA[key].region === region)
    .map((key) => ({
      id: key,
      ...PROJECTS_DATA[key],
    }));
};

// Get a specific project
export const getProject = (projectName) => {
  return PROJECTS_DATA[projectName]
    ? {
        id: projectName,
        ...PROJECTS_DATA[projectName],
      }
    : null;
};
