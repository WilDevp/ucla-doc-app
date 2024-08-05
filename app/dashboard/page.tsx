import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {auth} from "@clerk/nextjs/server";

export default async function DashboardPage() {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}