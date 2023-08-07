import React from 'react'
import { CgIfDesign } from 'react-icons/cg';
import { BiServer } from 'react-icons/bi';
import Skill from './Shared/Skill'
import SkillCard from './Shared/SkillCard';

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className="h-screen flex flex-row items-center justify-center text-center overflow-hidden gap-x-20">
            <SkillCard
                title="Frontend"
                icon={<CgIfDesign />}
                skills={[
                    <Skill skillName="HTML" progress={8} />,
                    <Skill skillName="CSS" progress={9} />
                ]}
            />

            <SkillCard
                title="Backend"
                icon={<BiServer />}
                skills={[
                    <Skill skillName="HTML" progress={8} />,
                    <Skill skillName="CSS" progress={9} />
                ]}
            />
            <SkillCard
                title="Frontend"
                skills={[
                    <Skill skillName="HTML" progress={8} />,
                    <Skill skillName="CSS" progress={9} />
                ]}
            />

        </div>
    );
}