import { notFound } from 'next/navigation';
import { auth } from "@clerk/nextjs/server";

// Definir un tipo para un documento individual
type Document = {
    title: string;
    content: string;
};

// Definir un tipo para la estructura de la documentación
type DocumentationDatabase = {
    [key: string]: Document[];
};

// Ahora usamos el tipo definido para nuestra "base de datos" simulada
const mockDocumentation: DocumentationDatabase = {
    'definicion-del-proyecto': [
        { title: 'Objetivos del proyecto', content: 'Detalles sobre cómo establecer objetivos claros...' },
        { title: 'Análisis de requisitos', content: 'Pasos para realizar un análisis de requisitos efectivo...' },
    ],
    'diseno-y-arquitectura': [
        { title: 'Patrones de diseño', content: 'Explicación de patrones de diseño comunes en software...' },
        { title: 'Arquitectura de microservicios', content: 'Ventajas y desafíos de la arquitectura de microservicios...' },
    ],
    // Añade más temas según sea necesario
};

export default async function DocumentationPage({ params }: { params: { topic: string } }) {
    const { userId } = auth();
    if (!userId) {
        notFound();
    }

    const { topic } = params;
    const formattedTopic = topic.replace(/-/g, ' ');
    const documents = mockDocumentation[topic] || [];

    if (documents.length === 0) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Documentación para: {formattedTopic}</h1>
            {documents.map((doc: Document, index: number) => (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">{doc.title}</h2>
                    <p className="text-gray-700">{doc.content}</p>
                </div>
            ))}
            <div className="mt-8">
                <a href="/dashboard" className="text-blue-500 hover:underline">
                    Volver al Dashboard
                </a>
            </div>
        </div>
    );
}