import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import ApplicationLogo from '../Components/ApplicationLogo';
import Header from '@/Components/customer/Header';
import Footer from '@/Components/customer/Footer';

export default function CustomerLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-auto flex flex-col bg-background font-sans antialiased">
            <Header />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}