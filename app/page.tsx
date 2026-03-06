"use client";

import { login } from "@/features/auth/actions";

export default function Home() {
    return (
        <div>
            <p>You are not signed in.</p>
            <button onClick={() => login()}>Sign in with GitHub</button>
        </div>
    );
}
