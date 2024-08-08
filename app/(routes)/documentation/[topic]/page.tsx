'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Importación dinámica del editor de texto enriquecido
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Document {
    id: number;
    title: string;
    content: string;
}

interface MockDocumentation {
    [key: string]: Document[];
}

// Simular una base de datos local
let mockDocumentation: MockDocumentation = {
    'definicion-del-proyecto': [
        { id: 1, title: 'Objetivos del proyecto', content: 'Contenido sobre objetivos...' },
        { id: 2, title: 'Alcance del proyecto', content: 'Contenido sobre alcance...' },
    ],
    'diseno-y-arquitectura': [
        { id: 3, title: 'Patrones de diseño', content: 'Contenido sobre patrones...' },
        { id: 4, title: 'Arquitectura de software', content: 'Contenido sobre arquitectura...' },
    ],
    // Añade más temas según sea necesario
};

// Función para normalizar el tema
const normalizeTopic = (topic: string) => {
    return topic
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9-]/g, '-');
};

export default function DocumentationPage() {
    const params = useParams();
    const topic = params.topic as string;
    console.log("Topic from URL params:", topic);

    const [showEditor, setShowEditor] = useState(false);
    const [newDocTitle, setNewDocTitle] = useState('');
    const [newDocContent, setNewDocContent] = useState('');
    const [documents, setDocuments] = useState<Document[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const normalizedTopic = normalizeTopic(topic);
        console.log("Normalized topic:", normalizedTopic);

        setTimeout(() => {
            console.log("Mock documentation data:", mockDocumentation);
            const topicDocs = mockDocumentation[normalizedTopic] || [];
            console.log("Documents found for topic:", topicDocs);
            setDocuments(topicDocs);
            setIsLoading(false);
        }, 500);
    }, [topic]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    const normalizedTopic = normalizeTopic(topic);
    console.log("Normalized topic after loading:", normalizedTopic);

    if (!mockDocumentation[normalizedTopic]) {
        console.log("Topic not found in mock documentation.");
        return <div>Tema no encontrado</div>;
    }

    const handleAddDocument = () => {
        const newDoc: Document = {
            id: Date.now(),
            title: newDocTitle,
            content: newDocContent,
        };
        mockDocumentation[normalizedTopic] = [...(mockDocumentation[normalizedTopic] || []), newDoc];
        console.log("New document added:", newDoc);
        setDocuments([...documents, newDoc]);
        setShowEditor(false);
        setNewDocTitle('');
        setNewDocContent('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Documentación para: {topic.replace(/-/g, ' ')}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {documents.map((doc: Document) => (
                    <div key={doc.id} className="border p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                        <p className="text-gray-600 mb-4">{doc.content.substring(0, 100)}...</p>
                        <Link href={`/documentation/${topic}/${doc.id}`} className="text-blue-500 hover:underline">
                            Leer más
                        </Link>
                    </div>
                ))}
            </div>
            {!showEditor ? (
                <button
                    onClick={() => setShowEditor(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Añadir Documentación
                </button>
            ) : (
                <div className="mt-8">
                    <input
                        type="text"
                        value={newDocTitle}
                        onChange={(e) => setNewDocTitle(e.target.value)}
                        placeholder="Título del documento"
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <ReactQuill
                        theme="snow"
                        value={newDocContent}
                        onChange={setNewDocContent}
                        className="mb-4"
                    />
                    <button
                        onClick={handleAddDocument}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={() => setShowEditor(false)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Cancelar
                    </button>
                </div>
            )}
            <div className="mt-8">
                <Link href="/dashboard" className="text-blue-500 hover:underline">
                    Volver al Dashboard
                </Link>
            </div>
        </div>
    );
}
