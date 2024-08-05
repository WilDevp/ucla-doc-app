import { SignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {auth} from "@clerk/nextjs/server";

export default async function HomePage() {
    const { userId } = auth();

    if (userId) {
        redirect('/dashboard');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-96">
                <SignIn />
            </div>
        </div>
    );
}