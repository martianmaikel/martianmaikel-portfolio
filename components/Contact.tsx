import Link from 'next/link'
import React, { useState } from 'react'
import { MdBusiness, MdEmail, MdMail, MdPerson, MdPhone, MdSend, MdTag } from 'react-icons/md'
import RevealOnScroll from './Animations/RevealOnScroll'
import Button from './Shared/Button'
import Input from './Shared/Input'
import Textarea from './Shared/Textarea'

type Props = {}

function Contact({ }: Props) {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [formError, setFormError] = useState(false)

    const validateInputs = () => {
        if (name.length < 2) {
            return false;
        }
        if (email.length < 2) {
            return false;
        }
        if (subject.length < 2) {
            return false;
        }
        if (message.length < 2) {
            return false;
        }
        return true;
    }

    const onSubmit = async () => {

        setSending(true);

        if (!validateInputs()) return

        const body = JSON.stringify({
            email: email,
            name: name,
            company: company,
            subject: subject,
            message: message,
        });

        const res = await fetch('/api/mail', {
            method: 'POST',
            body: body,
        });
        const { error } = await res.json();
        if (error) {
            setError(true);
            setSent(false);
        } else {
            setError(false);
            setName('');
            setCompany('');
            setEmail('');
            setSubject('');
            setMessage('');
            setSent(true);
        }

        setSending(false);
    }
    return (
        <div className='container mx-auto p-16 max-w-[1000px] my-20'>
            <RevealOnScroll width='w-full'>

                <h1 className="text-4xl text-center">Kontakt</h1>

            </RevealOnScroll>

            <RevealOnScroll width='w-full'>
                <div className='border-x-2 px-10 lg:px-20 pb-10 dark:border-orange-600'>
                    {sent && (
                        <div className="flex flex-col items-center mx-auto my-16 border-2 border-green-500 bg-green-500 bg-opacity-5 rounded-lg shadow-md w-fit p-4 px-10">
                            <span className="text-2xl  mb-4">Nachricht versendet ✔</span>
                            <span className="text-sm">Ich werde mich so schnell wie möglich bei dir melden.</span>
                            <span className="text-sm">Überprüfe ggf. auch deinen <b>Spam-Ordner</b></span>
                        </div>
                    )}
                    {error && (
                        <div className="flex flex-col items-center mx-auto my-16 border-2 border-red-500 bg-red-500 bg-opacity-5 rounded-lg shadow-md w-fit p-4 px-10">
                            <span className="text-2xl  mb-4">Fehler beim Senden </span>
                            <span className="text-sm">
                                Schicke mir direkt eine E-Mail an <br />
                                <Link
                                    href='mailto:maikel.szy@gmail.com'
                                    className='hover:text-orange-500'
                                >
                                    maikel.szy@gmail.com
                                </Link>
                            </span>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-10 my-16 justify-center items-center text-slate-500 dark:text-slate-400">

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
                    {!sent && !error && (
                        <>
                            <div className="flex flex-col justify-center items-center gap-y-10 mb-10" >
                                <div className="flex md:flex-row flex-col w-full gap-x-12 gap-y-10">
                                    <Input placeholder='Name' value={name} onChange={setName} minLength={2} icon={<MdPerson />} />
                                    <Input placeholder='Firma *optional' value={company} onChange={setCompany} minLength={2} icon={<MdBusiness />} />
                                </div>
                                <Input placeholder='Deine E-Mail' value={email} onChange={setEmail} minLength={2} icon={<MdEmail />} />

                                <Input placeholder='Betreff' value={subject} onChange={setSubject} minLength={2} icon={<MdTag />} />
                                <Textarea placeholder='Deine Nachricht' value={message} onChange={setMessage} />
                            </div>
                            <Button
                                onClick={onSubmit}
                                className='bg-orange-500 text-white px-10 py-4 rounded-full mt-10'
                                icon={<MdSend />}>
                                Senden
                            </Button>
                        </>
                    )}

                </div>
            </RevealOnScroll>


        </div>
    )
}

export default Contact