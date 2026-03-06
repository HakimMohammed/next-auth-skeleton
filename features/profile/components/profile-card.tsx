import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { auth } from "@/auth";
import { SignOutButton } from "@/features/auth/components/sing-out-button";

interface User {
    name: string;
    image: string;
    email: string;
}

export default async function ProfileCard() {
    const session = await auth();

    if (!session?.user) {
        throw new Error("Unauthorized");
    }

    const user: User = {
        name: session.user.name || "",
        image: session.user.image || "",
        email: session.user.email || "",
    };

    return (
        <section className="py-32">
            <div className="container flex justify-center">
                <Card className="w-full max-w-sm text-center">
                    <CardHeader className="pb-0">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar className="size-24">
                                <AvatarImage src={user.image} alt={user.name} className="object-cover" />
                                <AvatarFallback className="text-2xl font-semibold">
                                    {user.name
                                        .split(" ")
                                        .map(n => n[0])
                                        .join("")
                                        .toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold">{user.name}</h3>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex gap-2 justify-center items-center">
                        <SignOutButton />
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
