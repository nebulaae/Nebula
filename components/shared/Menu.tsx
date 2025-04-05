import Link from "next/link";

import { navLinks } from "@/constants";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const Menu = () => {
    return (
        <Sheet>
            <SheetTrigger className="hover:shadow-lg p-2 rounded-md transition ease-in-out duration-200 cursor-pointer">
                <TextAlignRightIcon className="size-6" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle />
                </SheetHeader>

                <nav className="flex flex-col items-start justify-center">
                    {navLinks().map((link) => (
                        <Link
                            href={link.href}
                            key={link.id}
                            className="text-neutral-800 px-3 py-2 text-sm hover:font-semibold hover:-translate-y-1 transition ease-in-out duration-200"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

            </SheetContent>
        </Sheet>
    );
};