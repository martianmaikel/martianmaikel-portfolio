import React from 'react'

type Props = {
    id: {
        main: string,
        Icon: React.ReactNode
    },
    title: string
}

function Skill(props: Props) {
    const Icon: React.ReactNode = props.id.Icon
    return (
        <>
            <div className="w-auto cursor-default">
                <div className={props.id.main + " feature-box-02 "}>
                    <div className="icon">
                        {Icon}
                    </div>
                    <h6>{props.title}</h6>
                </div>
            </div>
        </>
    )
}

export default Skill