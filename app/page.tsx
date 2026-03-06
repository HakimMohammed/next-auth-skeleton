import { auth } from "@/auth";
import { SignInButton } from "@/features/auth/components/sing-in-button";
import Link from "next/link";

export default async function Home() {
    const session = await auth();

    if (session?.user) {
        return (
            <div>
                <Link href="/profile">Go to Profile</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Auth Skeleton with Next Auth and GitHub</h1>
            <p>You are not signed in.</p>
            <SignInButton />
        </div>
    );
}
