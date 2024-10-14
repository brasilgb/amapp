
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Sidebar } from "@/Components/Sidebar";
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-auto flex bg-background font-sans antialiased">
            <Sidebar />
            <main className="w-full flex flex-col sm:ml-14">
                <Header />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}

