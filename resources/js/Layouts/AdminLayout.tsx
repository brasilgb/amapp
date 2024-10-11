
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <main className="w-full flex flex-col">
                <Header />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}
