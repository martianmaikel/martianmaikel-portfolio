import React from 'react'

interface TextareaProps {
    placeholder: string;
}

function Textarea({ placeholder }: TextareaProps) {
    return (
        <div className="relative w-full min-w-[200px]">
            <textarea
                className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 
            font-sans font-normal outline outline-0 focus:outline-0
            disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all 
            border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 border-blue-gray-200 
            focus:border-gray-900 !resize-none" placeholder=" "></textarea>
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[' '] after:block after:w-full after:absolute after:-bottom-0 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:!border-gray-900">
                {placeholder}
            </label>
        </div>
    )
}

export default Textarea