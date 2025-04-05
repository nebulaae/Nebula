"use client"

import { Button } from '../ui/button';
import { projectItems } from '@/constants';
import { DecodeText } from '../ui/magic/DecodeText';
import { FlickeringGrid } from '../ui/magic/flickering-grid';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../ui/carousel';
import {
    ArrowRightIcon,
    CommitIcon,
    GlobeIcon
} from '@radix-ui/react-icons';

export const Projects = () => {
    return (
        <section className="relative flex flex-col items-center w-full py-8 border-l border-b border-r border-gray-200" id="projects">
            <div className="my-8">
                <DecodeText
                    text="My projects"
                    className="tracking-wide font-bold"
                    refreshInterval={30000}
                />
            </div>
            {/* CAROUSEL */}
            <div className="w-full h-full px-4">
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {projectItems.map((item, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={item.id}>
                                <div className={`flex flex-col w-full h-full ${(index === 0) ? 'border' : 'border-t border-b border-r'} border-gray-200 p-2`}>

                                    <div className="relative flex justify-center items-center w-full h-36">
                                        <FlickeringGrid
                                            className="absolute inset-0 -z-10 size-full"
                                            squareSize={4}
                                            gridGap={6}
                                            color="#6B7280"
                                            maxOpacity={0.5}
                                            flickerChance={0.1}
                                        />
                                        <h1 className="text-3xl font-bold font-sans">{item.title}</h1>
                                    </div>

                                    <div className="flex flex-col gap-1 items-start justify-center border-t border-gray-200 pb-2">
                                        <h1 className="text-md font-semibold">{item.title}</h1>
                                        <p className="text-sm">{item.description}</p>
                                    </div>

                                    <div className="flex flex-row items-center justify-center gap-2 border-t border-gray-200">
                                        <a href={item.liveUrl} target="_blank" rel="noreferrer">
                                            <Button className="button-flat">
                                                <GlobeIcon />
                                                Live
                                            </Button>
                                        </a>
                                        <a href={item.demoUrl} target="_blank" rel="noreferrer">
                                            <Button className="button-flat">
                                                <ArrowRightIcon className="-rotate-45" />
                                                Demo
                                            </Button>
                                        </a>
                                    </div>

                                    <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                                        <div className="flex justify-start items-center gap-2">
                                            <CommitIcon />
                                            <span>{item.commit}</span>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* DOWNLOAD CV */}
            <div className="mt-8">
                <Button className="button-flat">
                    View All Projects
                    <ArrowRightIcon />
                </Button>
            </div>
        </section>
    );
};