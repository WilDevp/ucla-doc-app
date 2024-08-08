import { useState } from "react";

type CardData = {
    title: string;
    description: string;
    content: string;
};

type DocumentData = {
    title: string;
    content: string;
    topic: string;
};

// Mock de la base de datos
let mockDatabase: DocumentData[] = [];

const cardsData: CardData[] = [
    {
        title: "Definicion del proyecto",
        description: "Establece los objetivos, requisitos y alcance del proyecto.",
        content: "Define claramente los objetivos, requisitos y alcance del proyecto. Esto sentará las bases para el desarrollo exitoso."
    },
    {
        title: "Diseño y arquitectura",
        description: "Diseña la arquitectura y la interfaz de usuario del proyecto.",
        content: "Diseña la arquitectura del sistema y la interfaz de usuario. Esto asegurará que el proyecto tenga una estructura sólida y una experiencia de usuario atractiva."
    },
    {
        title: "Desarrollo e implementacion",
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

export default function DocumentationSection() {
    const [documentTitle, setDocumentTitle] = useState('');
    const [documentContent, setDocumentContent] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simular guardado en la base de datos
        mockDatabase.push({
            title: documentTitle,
            content: documentContent,
            topic: selectedTopic
        });
        alert('Documento guardado con éxito');
        setDocumentTitle('');
        setDocumentContent('');
        setSelectedTopic('');
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-6">Añadir Documentación</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        placeholder="Título del documento"
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        value={documentContent}
                        onChange={(e) => setDocumentContent(e.target.value)}
                        placeholder="Contenido del documento"
                        className="w-full p-2 border rounded h-32"
                    />
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Selecciona un tema</option>
                        {cardsData.map((card, index) => (
                            <option key={index} value={card.title}>
                                {card.title}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                        Guardar Documentación
                    </button>
                </form>
            </div>
        </section>
    );
}
