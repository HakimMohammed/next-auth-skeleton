"use client";
import { Button } from "@/components/ui/button";
import { loginKeycloak } from "@/features/auth/actions";

import Image from "next/image";

const KeycloakSignInButton = () => {
    return (
        <Button
            onClick={() => loginKeycloak()}
            variant="outline"
            type="button"
            className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
        >
            <Image
                src="https://www.keycloak.org/resources/images/icon.svg"
                alt="keycloak icon"
                className="h-4 w-4"
                width={16}
                height={16}
            />
            Sign in with Keycloak
        </Button>
    );
};

export default KeycloakSignInButton;