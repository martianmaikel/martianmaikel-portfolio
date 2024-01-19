import React from 'react'
import { Project, projectsData } from '../data/projects'
import RevealOnScroll from './Animations/RevealOnScroll'
import ProjectCard from './Template/ProjectCard'
type Props = {}


export default function Projects({ }: Props) {
    const projects: Project[] = [...projectsData].reverse();

    return (
        <div className="container mx-auto p-16">
            <div className="flex flex-col justify-center items-center h-full" >
                <RevealOnScroll>
                    <h1 className="text-4xl">Projekte</h1>
                    <h2 className='text-orange-600 text-center'>Latest</h2>
                </RevealOnScroll>

                <div className="columns-1 md:columns-2 lg:columns-3 lg:gap-8 space-y-4 gap-6 my-10">
                    {projects.map((project: Project) => (
                        <RevealOnScroll
                            key={project.id}
                            width="w-full"
                            className='break-inside-avoid-column'
                        >
                            <ProjectCard  {...project} />
                        </RevealOnScroll>
                    ))}
                </div>




            </div >
        </div >
    )

}