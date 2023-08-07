import React from 'react';

type Props = {
    title: string;
    skills: React.ReactNode[];
    icon?: React.ReactNode;
};

const SkillCard = ({ title, skills, icon }: Props) => {
    return (
        <div className="h-1/3 glass shadow-[0px_-0px_20px_0px_#fca311] hover:shadow-[0px_-0px_30px_0px_#fca311] duration-200">
            <div className="grid grid-cols gap-4 p-6 items-center justify-center">
                <div className="text-5xl mx-auto">{icon}</div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="grid grid-cols-2 gap-4">{skills}</div>
                </div>
            </div>
        </div>


    );
};

export default SkillCard;
