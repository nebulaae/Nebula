"use client"

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
            <div className="flex flex-col w-full my-8">
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
            <div className="flex flex-col w-full mt-8" style={{marginTop: "32px"}}>
                {/* TABLE ROW */}
                <div className="flex flex-row justify-start items-center border border-gray-200">
                    <Typewriter
                        className="text-base font-bold text-start"
                        speed={80}
                    >
                        Skills - Clean Code, Reliable Architechture, Pattern Programming
                    </Typewriter>
                </div>
            </div>
        </section>
    );
};