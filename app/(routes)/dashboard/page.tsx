import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function DashboardPage() {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <a className="flex items-center justify-center" href="#">
                    <Image src="/logo/Logo-UcatolicaLuisAmigo.png" width={100} height={100} alt="Ucla Doc App" />
                    <span className="text-black sr-only">Ucla Doc App</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <a className="text-sm font-medium hover:underline" href="#">
                        Roadmap
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Documentación
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Contacto
                    </a>
                    <UserButton />
                </nav>
            </header>
            <main className="flex-1 p-4">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
                    <div className="max-w-5xl mx-auto space-y-10 xl:space-y-16 px-4 md:px-6">
                        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                                    Roadmap para construir un proyecto de software
                                </h1>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                                    Sigue estos pasos para construir tu proyecto de software desde cero.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="max-w-5xl mx-auto grid gap-8 px-4 md:px-6 sm:grid-cols-2 lg:grid-cols-3">
                        {cardsData.map((card, index) => (
                            <div key={index} className="rounded-lg border bg-card shadow-sm p-6">
                                <h3 className="text-2xl font-semibold">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {card.description}
                                </p>
                                <p className="text-sm mt-4">
                                    {card.content}
                                </p>
                                <a
                                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium  shadow transition-colors"
                                    href="#"
                                >
                                    Ver más
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="py-6 w-full flex items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground mx-auto">© 2024 Sowua</p>
            </footer>
        </div>
    );
}

const cardsData = [
    {
        title: "Definición del proyecto",
        description: "Establece los objetivos, requisitos y alcance del proyecto.",
        content: "Define claramente los objetivos, requisitos y alcance del proyecto. Esto sentará las bases para el desarrollo exitoso."
    },
    {
        title: "Diseño y arquitectura",
        description: "Diseña la arquitectura y la interfaz de usuario del proyecto.",
        content: "Diseña la arquitectura del sistema y la interfaz de usuario. Esto asegurará que el proyecto tenga una estructura sólida y una experiencia de usuario atractiva."
    },
    {
        title: "Desarrollo e implementación",
        description: "Implementa el proyecto y despliega la solución.",
        content: "Implementa el proyecto utilizando las mejores prácticas de desarrollo de software. Luego, despliega la solución en un entorno de producción."
    },
    {
        title: "Pruebas y aseguramiento de calidad",
        description: "Asegura la calidad del proyecto a través de pruebas exhaustivas.",
        content: "Implementa un plan de pruebas exhaustivo para garantizar la calidad del proyecto. Esto incluye pruebas unitarias, de integración y de aceptación."
    },
    {
        title: "Mantenimiento y mejora continua",
        description: "Mantén y mejora el proyecto a lo largo del tiempo.",
        content: "Implementa un plan de mantenimiento y mejora continua para el proyecto. Esto incluye la corrección de errores, la implementación de nuevas funcionalidades y la optimización del rendimiento."
    },
    {
        title: "Gestión del proyecto",
        description: "Gestiona el proyecto de manera eficiente y efectiva.",
        content: "Implementa un plan de gestión del proyecto que incluya la planificación, el seguimiento y el control del proyecto. Esto asegurará que el proyecto se complete a tiempo y dentro del presupuesto."
    },
    {
        title: "Documentación y capacitación",
        description: "Documenta el proyecto y capacita a los usuarios.",
        content: "Documenta el proyecto de manera exhaustiva, incluyendo la arquitectura, el diseño, el código fuente y los procesos de implementación. Además, capacita a los usuarios finales para asegurar una adopción exitosa."
    }
];
