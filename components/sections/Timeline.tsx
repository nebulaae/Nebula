"use client"

import { timelineItems } from "@/constants";
import { DecodeText } from "../ui/magic/DecodeText";
import { Building2Icon, MapPin } from "lucide-react";

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
                    {timelineItems.map((item, index) => (
                        <li className="mb-10 ms-4" key={item.id}>
                            {/* TIMELINE DOT */}
                            <div className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 ${(index === 0) ? 'bg-neutral-500' : 'bg-neutral-200'} border border-neutral-50`} />
                            {/* DATE */}
                            <time className={`mb-1 text-sm font-normal leading-none ${(index === 0) ? 'text-neutral-800' : 'text-neutral-500'}  dark:text-neutral-500`}>
                                {item.date}
                            </time>
                            {/* Company */}
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                                <Building2Icon className="hidden sm:block size-4" /> 
                                {item.company}
                            </h3>
                            {/* ROLE */}
                            <h4 className="mb-2 text-md font-semibold">
                                {item.role}
                            </h4>
                            {/* DESCRIPTION */}
                            <p className="mb-4 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                                {item.description}
                            </p>
                            {/* LOCATION */}
                            <span className="flex items-center gap-2 mb-4 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                                <MapPin className="size-4" /> 
                                {item.location}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};