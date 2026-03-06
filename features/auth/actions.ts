"use server";
import { signIn, signOut } from "@/auth";

export const loginGitHub = async () => {
    await signIn("github", {
        redirectTo: "/profile",
    });
};

export const loginKeycloak = async () => {
    await signIn("keycloak", {
        redirectTo: "/profile",
    });
}

export const logout = async () => {
    await signOut({ redirectTo: "/" });
};
