// components/HeroSection.tsx
export default function HeroSection() {
    return (
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
    );
}
