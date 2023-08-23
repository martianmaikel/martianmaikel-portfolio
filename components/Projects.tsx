import React from 'react'
import { Project, projectsData } from '../data/projects'
import RevealOnScroll from './Animations/RevealOnScroll'
import ProjectCard from './Template/ProjectCard'
type Props = {}


export default function Projects({ }: Props) {
    const projects: Project[] = [...projectsData]
    return (
        <div className="container mx-auto p-16">
            < div className="flex flex-col justify-center items-center  h-full" >
                <RevealOnScroll>
                    <h1 className="text-4xl">Projekte</h1>
                    <h2 className='text-orange-600 text-center'>Latest</h2>
                </RevealOnScroll>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
                    {projects.map((project: Project) => (
                        <RevealOnScroll>
                            <ProjectCard key={project.id} {...project} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div >
        </div >
    )

}