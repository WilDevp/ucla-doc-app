// components/RoadmapCard.tsx
import Link from "next/link";

type CardData = {
    title: string;
    description: string;
    content: string;
};

const normalizeTitle = (title: string) => {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9-]/g, '-');
};

export default function RoadmapCard({ title, description, content }: CardData) {
    return (
        <div className="rounded-lg border bg-card shadow-sm p-6">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-sm mt-4">{content}</p>
            <Link href={`/documentation/${normalizeTitle(title)}`}
                  className="text-white mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium shadow transition-colors">
                Ver más
            </Link>
        </div>
    );
}
