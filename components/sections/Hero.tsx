"use client"

import { DecodeText } from '../ui/magic/DecodeText';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const Hero = () => {
    return (
        <section className="flex flex-col justify-between items-center w-full h-screen py-8 border border-gray-200" id="hero">
            <div />
            <div>
                <DecodeText
                    text="Welcome to the nebula portfolio!"
                    className="text-2xl md:text-6xl tracking-wide font-bold"
                    refreshInterval={16000}
                />
            </div>
            <div>
                <a href="#about"><ChevronDownIcon className="size-8 cursor-pointer animate-bounce" /></a>
            </div>
        </section>
    );
};