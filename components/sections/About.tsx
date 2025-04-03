"use client"

import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { DecodeText } from "../ui/magic/DecodeText"
import { Typewriter } from "../ui/magic/Typewriter"

export const About = () => {
    return (
        <section className="section items-center py-16 px-4 border border-gray-200" id="about">
            <DecodeText
                text="Who am I?"
                className="text-2xl md:text-6xl tracking-wide font-bold"
                refreshInterval={16000}
            />

            <Typewriter
                className="mt-4 text-base font-medium text-start"
                speed={30}
            >
                My name is Lazizbek. I am the Middle Frontend Developer based on Uzbekistan.
                I have been coding since 2020 and I specialize in many fields.
                I am a student of the Central Asian University and studying in the Computer Science.
                My tech stack is: Next.js, React.js. I am coding in the Typescript language.
                Moreover I am learning the Machine Learning, and i know different stuff from it
            </Typewriter>

            <Button className="button-solid">
                <DownloadIcon className="size-4" />
                Download the CV
                </Button>
        </section>
    );
};