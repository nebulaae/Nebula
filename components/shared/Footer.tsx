import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '@/constants';

export const Footer = () => {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-800 border-t border-gray-200 pt-8 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">
                    <Link href="/" className="flex flex-row gap-2 items-center text-lg font-bold text-gray-800 hover:text-gray-600">
                        <Image src="logo-white-transparent.svg" alt="logo" width={36} height={36} />
                        Nebula © {new Date().getFullYear()}
                    </Link>
                </span>
                <ul className="">
                    {navLinks().map((link) => (
                        <Link
                            href={link.href}
                            key={link.id}
                            className="text-neutral-800 px-3 py-2 text-sm hover:font-semibold hover:-translate-y-1 transition ease-in-out duration-200"
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    );
};