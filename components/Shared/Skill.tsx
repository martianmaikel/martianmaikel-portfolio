import React from 'react';

type Props = {
    skillName: string;
    progress: number;
};

const Skill = ({ skillName, progress }: Props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-24 h-2 bg-gray-300 rounded-full">
                <div className={`h-full bg-orange rounded-full w-${progress}/10`}></div>
            </div>
            <span className="mt-2">{skillName}</span>
        </div>
    );
};

export default Skill;