import { auth } from "@/auth";
import { SignOutButton } from "@/features/auth/components/sing-out-button";
import Image from "next/image";

const Page = async () => {
    const session = await auth();
    return (
        <div>
            <h1>Welcome to NextAuth Skeleton with NEXT.js 16</h1>
            <p>This is a simple authentication skeleton using NextAuth and GitHub as the provider.</p>

            <div>
                <p>You are currently signed in as {session?.user?.name}.</p>
                <p>Email: {session?.user?.email}</p>
                <Image src={session?.user?.image || ""} alt="User Avatar" width={100} height={100} />
            </div>

            <div>
                <p>Use the buttons below to sign out:</p>
                <SignOutButton />
            </div>
        </div>
    );
};

export default Page;
