export interface navInterface {
    [key: string]: string | string | string;
    name: string;
    path: string;
    icon: string;
}

export const navContent: Array<navInterface> = [
    {
        name: "start()",
        path: "/",
        icon: "FaHome"
    },
    {
        name: "skills()",
        path: "/",
        icon: "FaTerminal"
    },
    {
        name: "projects()",
        path: "/",
        icon: "FaBorderAll"
    },
    {
        name: "me()",
        path: "/",
        icon: "FaHandPeace"
    },
    {
        name: "contact()",
        path: "/",
        icon: "FaRegEnvelope"
    },
];