"use client"

import { DecodeText } from '../ui/magic/DecodeText';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../ui/carousel';

export const Projects = () => {
    return (
        <section className="flex flex-col items-center w-full py-8 border border-gray-200 relative" id="projects">
            <div>
                <DecodeText
                    text="My projects"
                    className="tracking-wide font-bold"
                    refreshInterval={30000}
                />
            </div>
            <div className="w-full h-full px-4">
            <Carousel className="w-full h-full">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-full h-full border border-gray-200">1</div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            </div>
        </section>
    );
};