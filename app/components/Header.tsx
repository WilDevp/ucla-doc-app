'use client';
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <a className="flex items-center justify-center" href="#">
                <Image src="/logo/Logo-UcatolicaLuisAmigo.png" width={100} height={100} alt="Ucla Doc App" />
                <span className="text-black sr-only">Ucla Doc App</span>
            </a>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <a className="text-sm font-medium hover:underline" href="#">Roadmap</a>
                <a className="text-sm font-medium hover:underline" href="#">Documentación</a>
                <a className="text-sm font-medium hover:underline" href="#">Contacto</a>
                <UserButton afterSignOutUrl="/" />
            </nav>
        </header>
    );
}
