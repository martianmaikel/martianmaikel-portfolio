import React from 'react'
import { CgIfDesign } from 'react-icons/cg';
import { BiServer } from 'react-icons/bi';
import Skill from './Shared/Skill';
import { SiPhp, SiJavascript, SiHtml5, SiCss3, SiMysql, SiTailwindcss, SiReact, SiLaravel, SiGit, SiDocker, SiLinux, SiShell, SiGnubash, SiGithub, SiSupabase } from "react-icons/si";

type Props = {}

export default function Skills({ }: Props) {
    const skillList = [
        { id: { main: 'bg-1', Icon: <SiHtml5 /> }, title: 'HTML' },
        { id: { main: 'bg-1', Icon: <SiCss3 /> }, title: 'Vanilla CSS' },
        { id: { main: 'bg-1', Icon: <SiTailwindcss /> }, title: 'Tailwind CSS' },
        { id: { main: 'bg-1', Icon: <SiReact /> }, title: 'React JS' },
        { id: { main: 'bg-1', Icon: <SiPhp /> }, title: 'PHP' },
        { id: { main: 'bg-1', Icon: <SiLaravel /> }, title: 'Laravel' },
        { id: { main: 'bg-2', Icon: <SiGit /> }, title: 'Git' },
        { id: { main: 'bg-2', Icon: <SiDocker /> }, title: 'Docker' },
        { id: { main: 'bg-2', Icon: <SiGnubash /> }, title: 'Bash' },
        { id: { main: 'bg-2', Icon: <SiGithub /> }, title: 'Co-Pilot' },
        { id: { main: 'bg-2', Icon: <SiMysql /> }, title: 'SQL' },
        { id: { main: 'bg-2', Icon: <SiSupabase /> }, title: 'Supabase' },
    ]

    return (
        <>
            <div className="container mx-auto p-8">
                <div className="grid lg:grid-cols-6 md:grid-cols-1 grid-cols-1 items-center mx-auto">
                    <div className="lg:col-span-6">
                        <div className="skill-box">
                            <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
                                {
                                    skillList.map((val, i) => {
                                        return <Skill key={i} id={val.id} title={val.title} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}