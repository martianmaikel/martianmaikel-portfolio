export interface ProjectImage {
    label: string,
    path: string,
    alt?: string,
    description?: string,
}

export interface Project {
    id: number,
    name: string,
    description: string,
    company?: string,
    headerImage?: string,
    galery?: ProjectImage[],
    tags?: string[],
    productionUrl?: string,
    githubUrl?: string,
}


export const projectsData: Project[] = [ 
    {
        id: 1,
        name: "Portfolio Website",
        description: "Portfolio website built with React and TypeScript. Hosted on Vercel. Animations with Framer Motion.",
        headerImage: "maikel-portfolio/header.png",
        githubUrl: "https://github.com/martianmaikel/martianmaikel-portfolio",
        productionUrl: "https://www.martianmaikel.dev/",
        tags: ["React", "TypeScript", "JavaScript", "HTML", "TailwindCSS", "Framer Motion", "Vercel"],
    },
    {
        id: 2,
        name: "Trackify - Time Tracking",
        description: "Time tracking app for small to medium sized teams. Frontend built with React. Backend built with Laravel and MySQL. ",
        company: "ImmoWert Experts SIV mbH",
        headerImage: "trackify/dashboard.png",
        productionUrl: "https://app.trackify.click/",
        tags: ["React", "JavaScript", "Laravel", "PHP", "REST API"],
    },



]