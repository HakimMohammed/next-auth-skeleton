import { auth } from "@/auth";
import LoginForm from "@/features/auth/components/login-form";
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

    return <LoginForm />;
}