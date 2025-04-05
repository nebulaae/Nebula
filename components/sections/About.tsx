"use client"

import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { DecodeText } from "../ui/magic/DecodeText"
import { Typewriter } from "../ui/magic/Typewriter"

export const About = () => {
    return (
        <section className="section items-center py-16 px-4 border-l border-b border-r border-gray-200" id="about">
            <DecodeText
                text="Who am I?"
                className="tracking-wide font-bold"
                refreshInterval={30000}
            />
            <div className="flex flex-col w-full mt-8">
                <Typewriter
                    className="text-base font-medium text-start"
                    speed={30}
                >
                    My name is Lazizbek. I am the Middle Frontend Developer based on Uzbekistan.
                    I have been coding since 2020 and I specialize in many fields.
                    I am a student of the Central Asian University and studying in the Computer Science.
                    My tech stack is: Next.js, React.js. I am coding in the Typescript language.
                    Moreover I am learning the Machine Learning, and i know different stuff from it
                </Typewriter>
            </div>

            {/* TABLE */}
            <div className="flex flex-col w-full my-8" style={{ marginTop: "32px" }}>
                {/* TABLE ROW */}
                <div className="flex flex-col justify-start items-center border border-gray-200 p-2">
                    <Typewriter
                        className="text-center text-lg font-bold"
                        speed={80}
                    >
                        Skills
                    </Typewriter>
                    <Typewriter
                        className="text-base text-start"
                        speed={80}
                    >
                        Clean Code, Reliable Architechture, Pattern Programming
                    </Typewriter>
                </div>
                {/* TABLE ROW */}
                <div className="flex flex-col justify-start items-center border-l border-b border-r border-gray-200 p-2">
                    <Typewriter
                        className="text-center text-lg font-bold"
                        speed={80}
                    >
                        Stack
                    </Typewriter>
                    <Typewriter
                        className="text-base text-start"
                        speed={80}
                    >
                        Next.js, React.js, MongoDB, PostgreSQL
                    </Typewriter>
                </div>
            </div>

            {/* DOWNLOAD CV */}
            <div>
                <Button className="button-solid">
                    <DownloadIcon />
                    Download CV
                </Button>
            </div>
        </section>
    );
};