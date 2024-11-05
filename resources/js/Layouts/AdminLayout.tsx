
import AppSidebar from "@/Components/customer/AppSidebar";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
// import { Sidebar } from "@/Components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider className="w-full">
            <AppSidebar />
            <main className="w-full flex flex-col ">
                <SidebarTrigger className="absolute"/>
                <Header />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </main>
        </SidebarProvider>
        // <div className="min-h-screen w-auto flex bg-background font-sans antialiased">
        //     <Head title="Área administrativa" />
        //     <Sidebar />
        //     <main className="w-full flex flex-col sm:ml-14">
        //         <Header />
        //         <div className="flex-grow">
        //             {children}
        //         </div>
        //         <Footer />
        //     </main>
        // </div>
    );
}

