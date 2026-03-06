"use client";
import { login } from "@/features/auth/actions";

export const SignInButton = () => {
    return <button onClick={() => login()}>Sign in with GitHub</button>;
};
