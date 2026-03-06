"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/features/auth/actions";

import Image from "next/image";

export const GitHubSignInButton = () => {
    return (
        <Button
            onClick={() => login()}
            variant="outline"
            type="button"
            className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
        >
            <Image
                src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                alt="github icon"
                className="dark:hidden  h-4 w-4"
                width={16}
                height={16}
            />
            <Image
                src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                alt="github icon"
                className="hidden dark:block  h-4 w-4"
                width={16}
                height={16}
            />
            Sign in with Github
        </Button>
    );
};
