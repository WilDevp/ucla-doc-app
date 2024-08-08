// app/dashboard/page.tsx
'use client';
import HeroSection from '../../components/HeroSection';
import RoadmapSection from '../../components/RoadmapSection';
import DocumentationSection from '../../components/DocumentationSection';
import Footer from '../../components/Footer';

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4">
                <HeroSection />
                <RoadmapSection />
                <DocumentationSection />
            </main>
            <Footer />
        </div>
    );
}
