import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Keycloak from "next-auth/providers/keycloak";

export const {auth, handlers, signIn, signOut} = NextAuth({
    providers: [GitHub, Keycloak],
});
