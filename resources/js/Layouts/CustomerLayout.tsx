import { PropsWithChildren } from 'react';
import Header from '@/Components/customer/Header';
import Footer from '@/Components/customer/Footer';
import ControlHead from '@/Components/customer/ControlHead';
import { Head } from '@inertiajs/react';

export default function CustomerLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-auto flex flex-col bg-background font-sans antialiased">
            <Head title="Área do cliente" />
            <Header />
            <ControlHead />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}
