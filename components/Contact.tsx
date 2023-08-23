import React, { useState } from 'react'
import Button from './Shared/Button'
import Input from './Shared/Input'
import Textarea from './Shared/Textarea'

type Props = {}

function Contact({ }: Props) {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = () => {
        console.log('submit', name, company, subject, message)
    }
    return (
        <div className='container mx-auto p-16  max-w-[1000px] my-20'>
            <h1 className="text-4xl text-center">Kontakt</h1>
            <div className='border-x-2 px-20 py-10'>
                <div className="flex flex-col justify-center items-center gap-y-10 mb-10" >
                    <div className="flex md:flex-row flex-col w-full gap-x-4">
                        <Input placeholder='Name' value={name} onChange={setName} minLength={2} />
                        <Input placeholder='Firma' value={company} onChange={setCompany} minLength={2} />
                    </div>
                    <Input placeholder='Betreff' value={subject} onChange={setSubject} minLength={2} />
                    <Textarea placeholder='Deine Nachricht' />
                </div>
                <Button onClick={onSubmit} className='bg-orange-500 text-white px-10 py-4 rounded-full mt-10'>Senden</Button>
            </div>

        </div>
    )
}

export default Contact