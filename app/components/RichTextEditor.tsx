// components/RichTextEditor.tsx
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    return (
        <div className="text-editor">
            <ReactQuill value={value} onChange={onChange} modules={modules} />
        </div>
    );
}
