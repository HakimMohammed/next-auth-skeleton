import { auth } from "@/auth";
import { SignInButton } from "@/features/auth/components/sing-in-button";
import Image from "next/image";

export default async function Home() {
    const session = await auth();

    if (session?.user) {
        return (
            <div>
                <h1>Auth Skeleton with Next Auth and GitHub</h1>
                <p>You are signed in as {session.user.name}.</p>
                <p>{session.user.email}</p>
                <Image src={session.user.image || ""} alt="User Avatar" width={100} height={100} />
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
