import Link from 'next/link'
import React, { useState } from 'react'
import { MdBusiness, MdMail, MdPerson, MdPhone, MdSend, MdTag } from 'react-icons/md'
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

            <div className='border-x-2 px-20 pb-10 dark:border-orange-600'>
                <div className="flex flex-row gap-10 my-16 justify-center items-center text-slate-500 dark:text-slate-400">
                    <div className='flex flex-row gap-x-2 items-center'>
                        <MdMail />
                        <Link
                            href='mailto:maikel.szy@gmail.com'
                            className='hover:text-orange-500 transition-all duration-100 ease-in-out hover:scale-[101%]'
                        >
                            maikel.szy@gmail.com
                        </Link>
                    </div>
                    <div className='flex flex-row gap-x-2 items-center '>
                        <MdPhone />
                        <Link
                            href='tel:+4917640404040'
                            className='hover:text-orange-500 transition-all duration-100 ease-in-out hover:scale-[101%]'
                        >
                            +4917640404040
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-10 mb-10" >
                    <div className="flex md:flex-row flex-col w-full gap-x-12">
                        <Input placeholder='Name' value={name} onChange={setName} minLength={2} icon={<MdPerson />} />
                        <Input placeholder='Firma' value={company} onChange={setCompany} minLength={2} icon={<MdBusiness />} />
                    </div>
                    <Input placeholder='Betreff' value={subject} onChange={setSubject} minLength={2} icon={<MdTag />} />
                    <Textarea placeholder='Deine Nachricht' value={message} onChange={setMessage} />
                </div>
                <Button onClick={onSubmit} className='bg-orange-500 text-white px-10 py-4 rounded-full mt-10' icon={<MdSend />}>Senden</Button>
            </div>

        </div>
    )
}

export default Contact