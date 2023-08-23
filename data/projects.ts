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
    headerImage?: string,
    galery?: ProjectImage[],
    tags?: string[],
    productionUrl?: string,
    githubUrl?: string,
}


export const projectsData: Project[] = [ 
    {
        id: 1,
        name: "Portfolio",
        description: "Portfolio website built with React and TypeScript. Hosted on Vercel. Animations with Framer Motion.",
        headerImage: "maikel-portfolio/header.png",
        githubUrl: "https://github.com/martianmaikel/martianmaikel-portfolio",
        tags: ["React", "TypeScript", "JavaScript", "HTML", "TailwindCSS", "Framer Motion", "Vercel"],
    },



]