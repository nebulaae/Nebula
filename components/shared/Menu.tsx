import { TextAlignRightIcon } from "@radix-ui/react-icons";
import {
    Sheet,
    SheetContent,
    SheetDescription,
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
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};