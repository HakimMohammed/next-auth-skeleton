"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/features/auth/actions";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
    return (
        <Button
            variant="outline"
            className="border border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            onClick={() => logout()}
        >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
        </Button>
    );
};
