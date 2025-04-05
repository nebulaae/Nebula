"use client"

import { Particles } from '../ui/magic/particles';
import { DecodeText } from '../ui/magic/DecodeText';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const Hero = () => {

    return (
        <section className="flex flex-col justify-between items-center w-full h-screen py-8 border border-gray-200 relative" id="hero">
            <div />
            <div>
                <DecodeText
                    text="Welcome to the nebula portfolio!"
                    className="tracking-wide font-bold"
                    refreshInterval={30000}
                />
            </div>
            <div>
                <a href="#about"><ChevronDownIcon className="size-8 cursor-pointer animate-bounce" /></a>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={50}
                ease={10}
                color="#000000"
                refresh
            />
        </section>
    );
};