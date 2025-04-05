"use client"

import { DecodeText } from "../ui/magic/DecodeText";

export const Timeline = () => {
    return (
        <section className="relative flex flex-col items-center w-full py-8 border-l border-b border-r border-gray-200" id="timeline">
            <div className="my-8">
                <DecodeText
                    text="Timeline"
                    className="tracking-wide font-bold"
                    refreshInterval={30000}
                />
            </div>

            {/* TIMELINE */}
            <div className="w-full h-full px-4 border-t border-b border-gray-200">
                <ol className="relative py-8 border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-gray-400 border border-neutral-50"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                </ol>
            </div>
        </section>
    );
};