import React from 'react'
import ProjectCard from './Shared/ProjectCard'
import Slider from './Shared/Slider'

type Props = {}


export default function Projects({ }: Props) {
    return (
        <div className="container mx-auto h-screen">
            <div className='relative w-full h-full'>

                <div className='absolute top-1/2 left-1/3 w-96 h-96 bg-orange rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob-slow'></div>
                <div className='absolute top-1/3 left-1/2 w-96 h-96 bg-grad-l rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob-fast'></div>
                <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-grad-r rounded-full blur-xl mix-blend-multiply dark:mix-blend-screen opacity-50 animate-blob-md'></div>

                <Slider
                    items={[
                        <ProjectCard
                            titel='Portfolio Website'
                            text='Persönliche Webseite. Erstellt mit Next JS und Tailwind CSS. Features: Dark-Mode, Responsive, Framer Motion Effekte, Kontakt u.v.m'
                            subject='Personal'
                            githubLink='https://github.com/martianmaikel/martianmaikel-portfolio'
                            prodLink='https://www.martianmaikel.dev/'
                            usedTech={['TypeScript', 'Tailwind', 'Framer Motion', 'Next JS', 'React']}
                            features={['Framer Motion Effekte', 'Kontaktformular', 'Dark Mode', 'Responsive']}
                            logo='/assets/mm-logo-sm.png'
                        />,
                        <ProjectCard
                            titel='Neue Welt'
                            text='moin'
                            subject='Personal Project'
                            githubLink=''
                            usedTech={['TypeScript', 'Tailwind', 'Framer Motion', 'Next JS', 'React', 'Flutter']}
                            logo='/assets/projects/10x-logo-light-100.png'
                        />,
                        <ProjectCard
                            titel='Neue Welt'
                            text='moin'
                            subject='Personal'
                            usedTech={['TypeScript', 'Tailwind', 'Framer Motion', 'Next JS', 'React']}
                        />
                    ]}

                />
            </div>

        </div>

    )
}