import React from 'react'
import RevealOnScroll from './Animations/RevealOnScroll'

function Services() {
    return (
        <div className="container mx-auto">
            <RevealOnScroll>
                <h1 className="text-4xl md:hidden">Services</h1>

                <div className="flex flex-col md:flex-row md:gap-x-6">
                    <div className="flex flex-col md:pl-5 flex-1">
                        <h1 className="text-4xl mb-4 hidden md:block">Services</h1>
                        <div className="flex lg:flex-row flex-col flex-1 gap-6 max-h-full">
                            <div className="md:w-1/2 rounded-lg border-2 border-slate-900 flex-1 transform transition-transform hover:scale-[102%] duration-300">
                                <img src="/assets/ai-portrait-sit.jpg" alt="img" className="object-cover rounded-md h-full w-full" />
                            </div>
                            <div className="md:w-1/2 hidden md:block rounded-lg border-2 border-slate-900 flex-1 transform transition-transform hover:scale-[102%] duration-300">
                                <img src="/assets/php-code.jpg" alt="img" className="object-cover rounded-md h-full w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:pr-5 flex-1">
                        <div className="service-box">
                            <div className="text">
                                <h6>Backend Entwicklung</h6>
                                <p>
                                    Als Experte in PHP und Laravel setze ich Full Stack Applikationen als auch Backend-Systeme und REST APIs um.
                                    Effiziente und performante Lösungenm, sowie eine wartbare Codebasis sind dabei mein Anspruch.
                                </p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="text">
                                <h6>Frontend Entwicklung</h6>
                                <p>
                                    Ansprechendes und modernes Design für Dich und/oder Deine Kunden.
                                    Sowohl mit Vanilla CSS und reinem HTML als auch JavaScript Libraries wie React JS setze ich Dein Wunschdesign um.
                                </p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="text">
                                <h6>Optimierung & Weiterentwicklung</h6>
                                <p>
                                    Du hast bereits eine Website oder Webanwendung, die Du optimieren oder weiterentwickeln möchtest?
                                </p>
                                <p>
                                    Gern übernehme ich die Wartung und Weiterentwicklung Deiner bestehenden Systeme.
                                </p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="text">
                                <h6>Beratung & Konzeption</h6>
                                <p>
                                    Von der gewählten Technologie, über das Datenbankdesign hin zur Softwarearchitektur - gute Software will auch gut geplant sein.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

        </div>

    )
}

export default Services