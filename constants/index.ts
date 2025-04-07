import { createHash } from 'crypto';
import { useTranslations } from "next-intl"

export const navLinks = () => {
    const t = useTranslations("Header.Navbar");

    const links = [
        {
            id: 1,
            title: t("Home"),
            href: "#home",
        },
        {
            id: 2,
            title: t("About"),
            href: "#about",
        },
        {
            id: 3,
            title: t("Projects"),
            href: "#projects",
        },
        {
            id: 4,
            title: t("Timeline"),
            href: "#timeline",
        },
        {
            id: 5,
            title: t("Contacts"),
            href: "#contacts",
        },
    ]

    return links;
}

export const projectItems = [
    {
        id: 1,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example1").digest('hex').substring(0, 7),
    },
    {
        id: 2,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example2").digest('hex').substring(0, 7),
    },
    {
        id: 3,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example3").digest('hex').substring(0, 7),
    },
    {
        id: 4,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example4").digest('hex').substring(0, 7),
    },
    {
        id: 5,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example5").digest('hex').substring(0, 7),
    },
    {
        id: 6,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example6").digest('hex').substring(0, 7),
    },
    {
        id: 7,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example7").digest('hex').substring(0, 7),
    },
    {
        id: 8,
        title: "Example",
        description: "Example",
        liveUrl: "https://google.com",
        demoUrl: "https://facebook.com",
        commit: createHash('sha256').update("Example8").digest('hex').substring(0, 7),
    },
]


export const timelineItems = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Way II investment management",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "December 2024 - February 2025",
        location: "Tashkent - Uzbekistan"
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Way II investment management",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "December 2024 - February 2025",
        location: "Tashkent - Uzbekistan"
    },
    
]