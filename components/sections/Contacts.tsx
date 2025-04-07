"use client"

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { DecodeText } from "../ui/magic/DecodeText";

export const Contacts = () => {
    return (
        <section className="relative flex flex-col items-center w-full py-8 border-l border-b border-r border-gray-200" id="contacts">
            <div className="my-8">
                <DecodeText
                    text="Contact Me"
                    className="tracking-wide font-bold"
                    refreshInterval={30000}
                />
            </div>
            {/* CONTACT FORM */}
            <div className="flex flex-col items-center justify-center gap-0 max-w-[300px] w-full">
                <Input placeholder="Type your name" className="border border-gray-200 rounded-none" />
                <Input placeholder="Type your email" className="border-l border-b border-r border-gray-200 rounded-none" />
                <Input placeholder="Topic" className="border-l border-b border-r border-gray-200 rounded-none" />
                <Textarea placeholder="Type your message" className="border-l border-b border-r border-gray-200 rounded-none" />
                <Button className="button-flat w-full">Submit</Button>
            </div>
        </section>
    );
};