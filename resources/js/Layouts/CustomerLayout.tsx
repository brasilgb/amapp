import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '../Components/ApplicationLogo';
import Header from '@/Components/customer/Header';
import Footer from '@/Components/customer/Footer';
import ControlHead from '@/Components/customer/ControlHead';
interface CitiesProps {
    data: any;
    children: ReactNode;
}
export default function CustomerLayout({children, data}: CitiesProps) {
    return (
        <div className="min-h-screen w-auto flex flex-col bg-background font-sans antialiased">
            <Header />
            <ControlHead data={data} />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}
